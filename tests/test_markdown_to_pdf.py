import os
import sys
import unittest
import tempfile
import importlib.util
from reportlab.platypus import Paragraph, Preformatted, Table
from reportlab.platypus.flowables import HRFlowable

# Dynamically import the markdown_to_pdf script from the hyphenated directory
curr_dir = os.path.dirname(os.path.abspath(__file__))
script_path = os.path.join(curr_dir, "../utilities/Markdown-PDF-Converter/markdown_to_pdf.py")

spec = importlib.util.spec_from_file_location("markdown_to_pdf", script_path)
markdown_to_pdf = importlib.util.module_from_spec(spec)
sys.modules["markdown_to_pdf"] = markdown_to_pdf
spec.loader.exec_module(markdown_to_pdf)

HTMLToFlowablesParser = markdown_to_pdf.HTMLToFlowablesParser
setup_styles = markdown_to_pdf.setup_styles
THEMES = markdown_to_pdf.THEMES
convert_markdown_to_pdf = markdown_to_pdf.convert_markdown_to_pdf


class TestMarkdownToPDF(unittest.TestCase):
    def setUp(self):
        self.theme = THEMES["Classic"]
        self.styles = setup_styles(self.theme)
        self.printable_width = 504  # standard letter width minus margins

    def test_themes_exist(self):
        """Verify the three core visual themes are defined."""
        self.assertIn("Classic", THEMES)
        self.assertIn("Modern", THEMES)
        self.assertIn("Sleek Dark", THEMES)

    def test_styles_setup(self):
        """Verify styles are properly defined and customized."""
        styles = setup_styles(self.theme)
        self.assertIn("Normal", styles)
        self.assertIn("Heading1", styles)
        self.assertIn("CustomListItem", styles)
        self.assertIn("CodeStyle", styles)
        self.assertIn("QuoteParaStyle", styles)

    def test_parse_paragraphs_and_headers(self):
        """Verify headers and paragraph parsing."""
        html = "<h1>Header 1</h1><p>This is a <b>bold</b> and <i>italic</i> paragraph.</p>"
        parser = HTMLToFlowablesParser(self.styles, self.theme, self.printable_width)
        parser.feed(html)
        
        story = parser.story
        self.assertEqual(len(story), 2)
        
        # Verify Header Flowable
        self.assertIsInstance(story[0], Paragraph)
        self.assertEqual(story[0].text, "Header 1")
        self.assertEqual(story[0].style.name, "Heading1")
        
        # Verify Paragraph Flowable
        self.assertIsInstance(story[1], Paragraph)
        self.assertEqual(story[1].text, "This is a <b>bold</b> and <i>italic</i> paragraph.")
        self.assertEqual(story[1].style.name, "Normal")

    def test_parse_lists(self):
        """Verify ordered and unordered lists parsing."""
        html = "<ul><li>Item A</li><li>Item B</li></ul>"
        parser = HTMLToFlowablesParser(self.styles, self.theme, self.printable_width)
        parser.feed(html)
        
        story = parser.story
        # 2 list items + 1 spacer after list
        self.assertEqual(len(story), 3)
        self.assertIsInstance(story[0], Paragraph)
        self.assertIn("Item A", story[0].text)
        self.assertIn("&bull;", story[0].text)
        
        # Test ordered list
        html_ol = "<ol><li>First</li><li>Second</li></ol>"
        parser_ol = HTMLToFlowablesParser(self.styles, self.theme, self.printable_width)
        parser_ol.feed(html_ol)
        
        story_ol = parser_ol.story
        self.assertEqual(len(story_ol), 3)
        self.assertIsInstance(story_ol[0], Paragraph)
        self.assertIn("1.&nbsp;&nbsp;First", story_ol[0].text)
        self.assertIn("2.&nbsp;&nbsp;Second", story_ol[1].text)

    def test_parse_blockquote(self):
        """Verify blockquotes convert into wrapped tables with borders."""
        html = "<blockquote><p>To be or not to be.</p></blockquote>"
        parser = HTMLToFlowablesParser(self.styles, self.theme, self.printable_width)
        parser.feed(html)
        
        story = parser.story
        # 1 table representing blockquote + 1 spacer after table
        self.assertEqual(len(story), 2)
        self.assertIsInstance(story[0], Table)
        
        # Extract paragraph inside table cell
        cell_flowables = story[0]._cellvalues[0][0]
        self.assertEqual(len(cell_flowables), 1)
        self.assertIsInstance(cell_flowables[0], Paragraph)
        self.assertEqual(cell_flowables[0].text, "To be or not to be.")
        self.assertEqual(cell_flowables[0].style.name, "QuoteParaStyle")

    def test_parse_code_blocks(self):
        """Verify preformatted code blocks parse correctly."""
        html = "<pre><code>def func():\n    return 42\n</code></pre>"
        parser = HTMLToFlowablesParser(self.styles, self.theme, self.printable_width)
        parser.feed(html)
        
        story = parser.story
        # 1 table wrapping code block + 1 spacer
        self.assertEqual(len(story), 2)
        self.assertIsInstance(story[0], Table)
        
        pre = story[0]._cellvalues[0][0]
        self.assertIsInstance(pre, Preformatted)
        self.assertEqual(pre.lines, ["def func():", "    return 42"])

    def test_parse_tables(self):
        """Verify table parsing maps rows and headers correctly."""
        html = "<table><tr><th>H1</th><th>H2</th></tr><tr><td>C1</td><td>C2</td></tr></table>"
        parser = HTMLToFlowablesParser(self.styles, self.theme, self.printable_width)
        parser.feed(html)
        
        story = parser.story
        # 1 table + 1 spacer
        self.assertEqual(len(story), 2)
        self.assertIsInstance(story[0], Table)
        
        # Check table contents
        cells = story[0]._cellvalues
        self.assertEqual(len(cells), 2)  # 2 rows
        self.assertEqual(len(cells[0]), 2)  # 2 cols
        
        # Header cell Paragraph
        self.assertIsInstance(cells[0][0], Paragraph)
        self.assertEqual(cells[0][0].text, "H1")
        self.assertEqual(cells[0][0].style.name, "TableHeaderStyle")
        
        # Body cell Paragraph
        self.assertIsInstance(cells[1][0], Paragraph)
        self.assertEqual(cells[1][0].text, "C1")
        self.assertEqual(cells[1][0].style.name, "TableCellStyle")

    def test_parse_horizontal_rules(self):
        """Verify hr maps to HRFlowable."""
        html = "<p>Text</p><hr /><p>More text</p>"
        parser = HTMLToFlowablesParser(self.styles, self.theme, self.printable_width)
        parser.feed(html)
        
        story = parser.story
        self.assertEqual(len(story), 3)
        self.assertIsInstance(story[0], Paragraph)
        self.assertIsInstance(story[1], HRFlowable)
        self.assertIsInstance(story[2], Paragraph)

    def test_end_to_end_conversion(self):
        """Verify the end to end conversion writes a PDF file correctly."""
        md_text = """# Sample Markdown Document
This is some body text with **bold styling** and `inline code`.

## List Section
- Point 1
- Point 2

## Quote Section
> Quote goes here.

## Table Section
| Parameter | Value |
|-----------|-------|
| Speed     | Fast  |
"""
        with tempfile.TemporaryDirectory() as tmpdir:
            input_file = os.path.join(tmpdir, "input.md")
            output_file = os.path.join(tmpdir, "output.pdf")
            
            with open(input_file, "w", encoding="utf-8") as f:
                f.write(md_text)
                
            # Run conversion
            convert_markdown_to_pdf(input_file, output_file, "Modern")
            
            self.assertTrue(os.path.exists(output_file))
            self.assertGreater(os.path.getsize(output_file), 0)

    def test_empty_markdown_file(self):
        """Verify conversion of an empty Markdown file creates a valid PDF."""
        with tempfile.TemporaryDirectory() as tmpdir:
            input_file = os.path.join(tmpdir, "empty.md")
            output_file = os.path.join(tmpdir, "empty.pdf")

            with open(input_file, "w", encoding="utf-8") as f:
                f.write("")

            convert_markdown_to_pdf(input_file, output_file, "Classic")

            self.assertTrue(os.path.exists(output_file))
            self.assertGreater(os.path.getsize(output_file), 0)


if __name__ == "__main__":
    unittest.main()
