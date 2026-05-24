# FFmpeg Operations Reference

Complete command reference for video editing operations in Replit. All examples use Node.js with `child_process.execFile`or`fluent-ffmpeg`.

## Table of Contents

1. [Trimming and Cutting](#trimming-and-cutting)
2. [Concatenation](#concatenation)

3. [Transitions](#transitions)
4. [Text Overlays](#text-overlays)

5. [Subtitles](#subtitles)
6. [Audio](#audio)

7. [Effects](#effects)
8. [Format Conversion](#format-conversion)

9. [Image Extraction](#image-extraction)
10. [GIF Creation](#gif-creation)

11. [Resizing and Cropping](#resizing-and-cropping)
12. [Watermarks and Overlays](#watermarks-and-overlays)

13. [Compression](#compression)
14. [Stabilization](#stabilization)

15. [Looping](#looping)
16. [Rotation and Flipping](#rotation-and-flipping)

17. [Split Screen](#split-screen)
18. [Muting and Audio Removal](#muting-and-audio-removal)

19. [Thumbnail Generation](#thumbnail-generation)
20. [Watermark Removal (Crop)](#watermark-removal-crop)

21. [Logo Overlay (Branding)](#logo-overlay-branding)
22. [Social Media Reframing](#social-media-reframing)

---

## Trimming and Cutting

### Trim without re-encoding (fast, frame-accurate at keyframes)

```bash

ffmpeg -i input.mp4 -ss 00:00:30 -to 00:01:15 -c copy output.mp4

```

Place `-ss`before`-i`for faster seeking (input seeking), or after`-i`for frame-accurate seeking (output seeking). Using`-c copy` avoids re-encoding but may have imprecise start points at non-keyframe positions.

### Trim with re-encoding (slower, frame-accurate)

```bash

ffmpeg -i input.mp4 -ss 00:00:30 -to 00:01:15 -c:v libx264 -c:a aac output.mp4

```

### Remove a section (keep before and after)

Split into two parts and concatenate:

```bash

ffmpeg -i input.mp4 -t 00:00:30 -c copy part1.mp4

ffmpeg -i input.mp4 -ss 00:01:00 -c copy part2.mp4

```

Then concatenate (see Concatenation section).

---

## Concatenation

### Concat demuxer (same codec, resolution, frame rate)

Create a text file `concat_list.txt`:

```text

file 'clip1.mp4'

file 'clip2.mp4'

file 'clip3.mp4'

```

```bash

ffmpeg -f concat -safe 0 -i concat_list.txt -c copy output.mp4

```

This is the fastest method because it avoids re-encoding, but all clips must share the same codec, resolution, and frame rate.

### Concat filter (different codecs/resolutions)

```bash

ffmpeg -i clip1.mp4 -i clip2.mp4 \\

-filter_complex "[0:v][0:a][1:v][1:a]concat=n=2:v=1:a=1[outv][outa]" \\

-map "[outv]" -map "[outa]" output.mp4

```

This re-encodes everything but handles mismatched inputs. Scale inputs to a common resolution first if they differ.

---

## Transitions

### Crossfade between two clips

```bash

ffmpeg -i clip1.mp4 -i clip2.mp4 \\

-filter_complex "\\

[0:v]trim=duration=5,setpts=PTS-STARTPTS[v0]; \\

[1:v]trim=duration=5,setpts=PTS-STARTPTS[v1]; \\

[v0][v1]xfade=transition=fade:duration=1:offset=4[outv]; \\

[0:a]atrim=duration=5,asetpts=PTS-STARTPTS[a0]; \\

[1:a]atrim=duration=5,asetpts=PTS-STARTPTS[a1]; \\

[a0][a1]acrossfade=d=1[outa]" \\

-map "[outv]" -map "[outa]" output.mp4

```

### Available xfade transitions

`fade`, `wipeleft`, `wiperight`, `wipeup`, `wipedown`, `slideleft`, `slideright`, `slideup`, `slidedown`, `circlecrop`, `rectcrop`, `distance`, `fadeblack`, `fadewhite`, `radial`, `smoothleft`, `smoothright`, `smoothup`, `smoothdown`, `circleopen`, `circleclose`, `vertopen`, `vertclose`, `horzopen`, `horzclose`, `dissolve`, `pixelize`, `diagtl`, `diagtr`, `diagbl`, `diagbr`, `hlslice`, `hrslice`, `vuslice`, `vdslice`, `hblur`, `fadegrays`, `squeezev`, `squeezeh`, `zoomin`, `hlwind`, `hrwind`, `vuwind`, `vdwind`, `coverleft`, `coverright`, `coverup`, `coverdown`, `revealleft`, `revealright`, `revealup`, `revealdown`

### Fade in/out

```bash

# Fade in first 2 seconds

ffmpeg -i input.mp4 -vf "fade=t=in:st=0:d=2" -c:a copy output.mp4

# Fade out last 2 seconds (requires knowing duration)

ffmpeg -i input.mp4 -vf "fade=t=out:st=8:d=2" -c:a copy output.mp4

# Audio fade in/out

ffmpeg -i input.mp4 -af "afade=t=in:st=0:d=2,afade=t=out:st=8:d=2" output.mp4

```

---

## Text Overlays

### Static text overlay

```bash

ffmpeg -i input.mp4 \\

-vf "drawtext=text='Hello World':fontsize=48:fontcolor=white:x=(w-text_w)/2:y=(h-text_h)/2:fontfile=/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" \\

output.mp4

```

### Text with background box

```bash

ffmpeg -i input.mp4 \\

-vf "drawtext=text='Title':fontsize=64:fontcolor=white:box=1:boxcolor=black@0.6:boxborderw=10:x=(w-text_w)/2:y=50" \\

output.mp4

```

### Timed text (appears and disappears)

```bash

ffmpeg -i input.mp4 \\

-vf "drawtext=text='Scene 1':fontsize=48:fontcolor=white:x=(w-text_w)/2:y=(h-text_h)/2:enable='between(t,2,5)'" \\

output.mp4

```

### Font discovery

List available fonts in the Replit environment:

```bash

fc-list : family style | sort

```

Or use a custom font file by downloading it to the project and referencing it with `fontfile=`.

---

## Subtitles

### Burn subtitles from SRT file

```bash

ffmpeg -i input.mp4 -vf "subtitles=subs.srt" output.mp4

```

### Burn subtitles with styling

```bash

ffmpeg -i input.mp4 \\

-vf "subtitles=subs.srt:force_style='FontSize=24,FontName=Arial,PrimaryColour=&Hffffff&,OutlineColour=&H000000&,Outline=2'" \\

output.mp4

```

### Burn ASS/SSA subtitles (preserves advanced styling)

```bash

ffmpeg -i input.mp4 -vf "ass=subs.ass" output.mp4

```

### Embed subtitles as a stream (soft subs, MKV only)

```bash

ffmpeg -i input.mp4 -i subs.srt -c copy -c:s srt output.mkv

```

---

## Audio

### Add background music

```bash

ffmpeg -i video.mp4 -i music.mp3 \\

-filter_complex "[1:a]volume=0.3[music];[0:a][music]amix=inputs=2:duration=first[outa]" \\

-map 0:v -map "[outa]" -c:v copy output.mp4

```

### Replace audio entirely

```bash

ffmpeg -i video.mp4 -i new_audio.mp3 \\

-map 0:v -map 1:a -c:v copy -shortest output.mp4

```

### Extract audio

```bash

ffmpeg -i video.mp4 -vn -c:a libmp3lame -q:a 2 output.mp3

ffmpeg -i video.mp4 -vn -c:a copy output.aac

```

### Remove audio

```bash

ffmpeg -i input.mp4 -an -c:v copy output.mp4

```

### Adjust volume

```bash

# Set to 50% volume

ffmpeg -i input.mp4 -af "volume=0.5" -c:v copy output.mp4

# Increase by 10dB

ffmpeg -i input.mp4 -af "volume=10dB" -c:v copy output.mp4

# Normalize audio

ffmpeg -i input.mp4 -af "loudnorm" -c:v copy output.mp4

```

### Audio delay/offset

```bash

# Delay audio by 1 second

ffmpeg -i input.mp4 -itsoffset 1 -i input.mp4 \\

-map 0:v -map 1:a -c copy output.mp4

```

---

## Effects

### Speed change

```bash

# 2x speed

ffmpeg -i input.mp4 -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2.0[a]" \\

-map "[v]" -map "[a]" output.mp4

# 0.5x speed (slow motion)

ffmpeg -i input.mp4 -filter_complex "[0:v]setpts=2.0*PTS[v];[0:a]atempo=0.5[a]" \\

-map "[v]" -map "[a]" output.mp4

```

Note: `atempo`only accepts values between 0.5 and 100.0. For extreme slow-motion, chain multiple atempo filters:`atempo=0.5,atempo=0.5` for 0.25x.

### Reverse

```bash

ffmpeg -i input.mp4 -vf reverse -af areverse output.mp4

```

Warning: `reverse` loads the entire video into memory. Only use on short clips.

### Rotate

```bash

# 90 degrees clockwise

ffmpeg -i input.mp4 -vf "transpose=1" output.mp4

# 90 degrees counter-clockwise

ffmpeg -i input.mp4 -vf "transpose=2" output.mp4

# 180 degrees

ffmpeg -i input.mp4 -vf "transpose=1,transpose=1" output.mp4

# Arbitrary angle (in radians)

ffmpeg -i input.mp4 -vf "rotate=PI/6" output.mp4

```

### Color adjustments

```bash

# Brightness, contrast, saturation

ffmpeg -i input.mp4 -vf "eq=brightness=0.1:contrast=1.2:saturation=1.3" output.mp4

# Convert to grayscale

ffmpeg -i input.mp4 -vf "hue=s=0" output.mp4

# Color curves (cinematic look)

ffmpeg -i input.mp4 -vf "curves=preset=cross_process" output.mp4

```

Available curve presets: `none`, `color_negative`, `cross_process`, `darker`, `increase_contrast`, `lighter`, `linear_contrast`, `medium_contrast`, `negative`, `strong_contrast`, `vintage`

### Blur

```bash

# Box blur

ffmpeg -i input.mp4 -vf "boxblur=5:1" output.mp4

# Gaussian blur

ffmpeg -i input.mp4 -vf "gblur=sigma=10" output.mp4

```

### Picture-in-picture

```bash

ffmpeg -i main.mp4 -i overlay.mp4 \\

-filter_complex "[1:v]scale=320:240[pip];[0:v][pip]overlay=W-w-10:H-h-10" \\

output.mp4

```

### Stabilize shaky video

```bash

# Step 1: Analyze

ffmpeg -i input.mp4 -vf "vidstabdetect=shakiness=5:accuracy=15" -f null -

# Step 2: Apply stabilization

ffmpeg -i input.mp4 -vf "vidstabtransform=smoothing=10:input=transforms.trf" output.mp4

```

---

## Format Conversion

### MP4 (H.264 + AAC — most compatible)

```bash

ffmpeg -i input.webm -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k output.mp4

```

CRF values: 18 (high quality, large file) to 28 (lower quality, small file). 23 is a good default.

### WebM (VP9 + Opus — web-optimized)

```bash

ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus output.webm

```

### MOV (ProRes — editing friendly)

```bash

ffmpeg -i input.mp4 -c:v prores_ks -profile:v 3 -c:a pcm_s16le output.mov

```

### Audio only

```bash

ffmpeg -i input.mp4 -vn -c:a libmp3lame -q:a 2 output.mp3

ffmpeg -i input.mp4 -vn -c:a libopus -b:a 128k output.opus

ffmpeg -i input.mp4 -vn -c:a flac output.flac

```

---

## Image Extraction

### Extract a single frame

```bash

ffmpeg -i input.mp4 -ss 00:00:05 -frames:v 1 frame.png

```

### Extract frames at interval

```bash

# One frame per second

ffmpeg -i input.mp4 -vf "fps=1" frames/frame_%04d.png

# One frame every 10 seconds

ffmpeg -i input.mp4 -vf "fps=1/10" frames/frame_%04d.png

```

### Create a thumbnail sheet (contact sheet)

```bash

ffmpeg -i input.mp4 -frames:v 1 -vf "select=not(mod(n\\100)),scale=160:90,tile=5x4" thumbnail.png

```

---

## GIF Creation

### Basic GIF

```bash

ffmpeg -i input.mp4 -ss 00:00:02 -t 5 -vf "fps=15,scale=480:-1" output.gif

```

### High-quality GIF with palette

```bash

# Step 1: Generate palette

ffmpeg -i input.mp4 -ss 2 -t 5 -vf "fps=15,scale=480:-1:flags=lanczos,palettegen" palette.png

# Step 2: Use palette for GIF

ffmpeg -i input.mp4 -i palette.png -ss 2 -t 5 \\

-filter_complex "[0:v]fps=15,scale=480:-1:flags=lanczos[v];[v][1:v]paletteuse" output.gif

```

The two-pass palette method produces significantly better GIFs with less banding.

---

## Resizing and Cropping

### Scale to specific dimensions

```bash

# Exact size

ffmpeg -i input.mp4 -vf "scale=1280:720" -c:a copy output.mp4

# Scale width, auto height (maintain aspect ratio)

ffmpeg -i input.mp4 -vf "scale=1280:-2" -c:a copy output.mp4

# Scale to fit within bounds (maintain aspect ratio)

ffmpeg -i input.mp4 -vf "scale='min(1280,iw)':'min(720,ih)':force_original_aspect_ratio=decrease" output.mp4

```

### Crop

```bash

# Crop to 1280x720 from center

ffmpeg -i input.mp4 -vf "crop=1280:720" -c:a copy output.mp4

# Crop with offset (x=100, y=50)

ffmpeg -i input.mp4 -vf "crop=1280:720:100:50" -c:a copy output.mp4

# Crop to 16:9 from center

ffmpeg -i input.mp4 -vf "crop=ih*16/9:ih" -c:a copy output.mp4

```

### Add padding/letterbox

```bash

# Add black bars to make 16:9

ffmpeg -i input.mp4 -vf "pad=ih*16/9:ih:(ow-iw)/2:(oh-ih)/2:black" output.mp4

```

---

## Watermarks and Overlays

### Image watermark

```bash

# Bottom-right corner with padding

ffmpeg -i video.mp4 -i watermark.png \\

-filter_complex "overlay=W-w-10:H-h-10" output.mp4

# With opacity

ffmpeg -i video.mp4 -i watermark.png \\

-filter_complex "[1:v]format=rgba,colorchannelmixer=aa=0.5[wm];[0:v][wm]overlay=W-w-10:H-h-10" output.mp4

```

### Timed overlay (appears at specific time)

```bash

ffmpeg -i video.mp4 -i overlay.png \\

-filter_complex "overlay=10:10:enable='between(t,3,8)'" output.mp4

```

---

## Compression

Reduce file size while maintaining acceptable quality.

### Quick compress (reduce bitrate)

```bash

# Moderate compression — good balance of size vs quality

ffmpeg -y -i input.mp4 \\

-c:v libx264 -crf 28 -preset medium \\

-c:a aac -b:a 96k \\

output_compressed.mp4

# Aggressive compression — much smaller file, noticeable quality loss

ffmpeg -y -i input.mp4 \\

-c:v libx264 -crf 32 -preset slow \\

-c:a aac -b:a 64k \\

output_small.mp4

# Target a specific file size (e.g., 25MB for Discord/email)

# Calculate bitrate: bitrate = (target_size_MB * 8192) / duration_seconds

# For a 60s video targeting 25MB: bitrate = (25 * 8192) / 60 ≈ 3413 kbps

ffmpeg -y -i input.mp4 \\

-c:v libx264 -b:v 3000k -maxrate 3400k -bufsize 6800k -preset medium \\

-c:a aac -b:a 128k \\

output_25mb.mp4

```

### Two-pass encoding (best quality at target size)

```bash

ffmpeg -y -i input.mp4 \\

-c:v libx264 -b:v 2000k -preset medium -pass 1 \\

-an -f null /dev/null

ffmpeg -y -i input.mp4 \\

-c:v libx264 -b:v 2000k -preset medium -pass 2 \\

-c:a aac -b:a 128k \\

output_2pass.mp4

```

### Reduce resolution for smaller file

```bash

# Downscale to 720p (keeps aspect ratio)

ffmpeg -y -i input.mp4 \\

-vf "scale=-2:720" \\

-c:v libx264 -crf 23 -preset medium \\

-c:a aac -b:a 128k \\

output_720p.mp4

# Downscale to 480p

ffmpeg -y -i input.mp4 \\

-vf "scale=-2:480" \\

-c:v libx264 -crf 23 -preset medium \\

-c:a aac -b:a 96k \\

output_480p.mp4

```

**CRF guide:** 18 = visually lossless, 23 = default (good quality), 28 = moderate compression, 32 = heavy compression, 40+ = very low quality. Each +6 roughly halves the file size.

---

## Stabilization

Stabilize shaky footage using FFmpeg's vidstab filter (two-pass process).

### Basic stabilization

```bash

# Pass 1: Analyze motion (creates transforms.trf)

ffmpeg -y -i shaky.mp4 \\

-vf vidstabdetect=shakiness=5:accuracy=15:result=transforms.trf \\

-f null -

# Pass 2: Apply stabilization

ffmpeg -y -i shaky.mp4 \\

-vf vidstabtransform=input=transforms.trf:smoothing=10:crop=black:zoom=1 \\

-c:v libx264 -crf 23 -preset medium \\

-c:a copy \\

stabilized.mp4

```

### Node.js wrapper

```typescript

async function stabilizeVideo(inputPath: string, outputPath: string, smoothing = 10) {

const transformsFile = inputPath + '.transforms.trf';

// Pass 1: detect motion

await execFileAsync('ffmpeg', [

'-y', '-i', inputPath,

'-vf', `vidstabdetect=shakiness=5:accuracy=15:result=${transformsFile}`,

'-f', 'null', '-'

]);

// Pass 2: apply stabilization

await execFileAsync('ffmpeg', [

'-y', '-i', inputPath,

'-vf', `vidstabtransform=input=${transformsFile}:smoothing=${smoothing}:crop=black:zoom=1`,

'-c:v', 'libx264', '-crf', '23', '-preset', 'medium',

'-c:a', 'copy',

outputPath

]);

await fs.promises.unlink(transformsFile).catch(() => {});

}

```

### Parameters

- `shakiness`(1-10): How shaky the video is. Default 5, use 8-10 for very shaky footage.
-`smoothing`(0-30): How much to smooth the camera path. Higher = smoother but may crop more. Default 10.

-`zoom` (0-10): Extra zoom to hide black borders from stabilization. 1 = slight zoom, 0 = no zoom (may show borders).

---

## Looping

Repeat a clip multiple times.

```bash

# Loop a clip 3 times using stream_loop

ffmpeg -y -stream_loop 2 -i input.mp4 \\

-c copy \\

output_looped.mp4

# Loop with re-encoding (more reliable for some formats)

ffmpeg -y -stream_loop 2 -i input.mp4 \\

-c:v libx264 -crf 23 -preset medium \\

-c:a aac -b:a 128k \\

output_looped.mp4

```

**Note:** `-stream_loop 2`means play the input 3 times total (original + 2 loops). Use`-stream_loop 4` for 5 times, etc.

### Create a boomerang effect (forward + reverse)

```bash

# Forward then reverse

ffmpeg -y -i input.mp4 \\

-filter_complex "[0:v]reverse[rv];[0:v][rv]concat=n=2:v=1:a=0[outv]" \\

-map "[outv]" \\

-c:v libx264 -crf 23 -preset medium \\

boomerang.mp4

```

---

## Rotation and Flipping

### Rotate (2)

```bash

# Rotate 90 degrees clockwise

ffmpeg -y -i input.mp4 \\

-vf "transpose=1" \\

-c:v libx264 -crf 23 -preset medium -c:a copy \\

rotated_90.mp4

# Rotate 90 degrees counter-clockwise

ffmpeg -y -i input.mp4 \\

-vf "transpose=2" \\

-c:v libx264 -crf 23 -preset medium -c:a copy \\

rotated_270.mp4

# Rotate 180 degrees

ffmpeg -y -i input.mp4 \\

-vf "transpose=1,transpose=1" \\

-c:v libx264 -crf 23 -preset medium -c:a copy \\

rotated_180.mp4

# Rotate by arbitrary angle (e.g., 15 degrees) — adds black borders

ffmpeg -y -i input.mp4 \\

-vf "rotate=15*PI/180:c=black:ow=rotw(15*PI/180):oh=roth(15*PI/180)" \\

-c:v libx264 -crf 23 -preset medium -c:a copy \\

rotated_15deg.mp4

```

### Flip

```bash

# Flip horizontally (mirror)

ffmpeg -y -i input.mp4 \\

-vf "hflip" \\

-c:v libx264 -crf 23 -preset medium -c:a copy \\

flipped_horizontal.mp4

# Flip vertically

ffmpeg -y -i input.mp4 \\

-vf "vflip" \\

-c:v libx264 -crf 23 -preset medium -c:a copy \\

flipped_vertical.mp4

```

**`transpose` values:** 0 = 90° counter-clockwise + vertical flip, 1 = 90° clockwise, 2 = 90° counter-clockwise, 3 = 90° clockwise + vertical flip.

---

## Split Screen

Put two or more videos side by side or in a grid.

### Two videos side by side (horizontal)

```bash

ffmpeg -y -i left.mp4 -i right.mp4 \\

-filter_complex "\\

[0:v]scale=640:360[left];\\

[1:v]scale=640:360[right];\\

[left][right]hstack=inputs=2[outv]" \\

-map "[outv]" -map 0:a? \\

-c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k \\

split_screen.mp4

```

### Two videos stacked (vertical)

```bash

ffmpeg -y -i top.mp4 -i bottom.mp4 \\

-filter_complex "\\

[0:v]scale=1080:540[top];\\

[1:v]scale=1080:540[bottom];\\

[top][bottom]vstack=inputs=2[outv]" \\

-map "[outv]" -map 0:a? \\

-c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k \\

stacked.mp4

```

### 2x2 grid (four videos)

```bash

ffmpeg -y -i v1.mp4 -i v2.mp4 -i v3.mp4 -i v4.mp4 \\

-filter_complex "\\

[0:v]scale=540:360[a];[1:v]scale=540:360[b];\\

[2:v]scale=540:360[c];[3:v]scale=540:360[d];\\

[a][b]hstack=inputs=2[top];\\

[c][d]hstack=inputs=2[bottom];\\

[top][bottom]vstack=inputs=2[outv]" \\

-map "[outv]" -map 0:a? \\

-c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k \\

grid_2x2.mp4

```

### Picture-in-picture (2)

```bash

# Small video in bottom-right corner (25% size)

ffmpeg -y -i main.mp4 -i pip.mp4 \\

-filter_complex "\\

[1:v]scale=iw/4:ih/4[pip];\\

[0:v][pip]overlay=W-w-20:H-h-20[outv]" \\

-map "[outv]" -map 0:a \\

-c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k \\

pip_output.mp4

# PiP with rounded corners (border radius)

ffmpeg -y -i main.mp4 -i pip.mp4 \\

-filter_complex "\\

[1:v]scale=320:180,format=yuva420p,\\

geq='lum=lum(X,Y):a=if(gt(abs(X-W/2),W/2-10)*gt(abs(Y-H/2),H/2-10),0,255)'[pip];\\

[0:v][pip]overlay=W-w-20:H-h-20[outv]" \\

-map "[outv]" -map 0:a \\

-c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k \\

pip_rounded.mp4

```

---

## Muting and Audio Removal

```bash

# Remove audio track entirely

ffmpeg -y -i input.mp4 -an \\

-c:v copy \\

output_muted.mp4

# Replace audio with silence (keeps audio stream but silent)

ffmpeg -y -i input.mp4 \\

-f lavfi -i anullsrc=channel_layout=stereo:sample_rate=44100 \\

-c:v copy -c:a aac -shortest \\

output_silent.mp4

# Keep only audio (extract as MP3)

ffmpeg -y -i input.mp4 \\

-vn -c:a libmp3lame -q:a 2 \\

audio_only.mp3

# Keep only audio (extract as AAC/M4A)

ffmpeg -y -i input.mp4 \\

-vn -c:a copy \\

audio_only.m4a

```

---

## Thumbnail Generation

Extract a single frame as an image file.

```bash

# Frame at a specific timestamp

ffmpeg -y -ss 00:00:05 -i input.mp4 \\

-frames:v 1 -q:v 2 \\

thumbnail.jpg

# Frame at 25% through the video

# (calculate timestamp from duration first with ffprobe)

ffmpeg -y -ss 30 -i input.mp4 \\

-frames:v 1 -q:v 2 \\

thumbnail_mid.jpg

# Multiple thumbnails at regular intervals (e.g., every 10 seconds)

ffmpeg -y -i input.mp4 \\

-vf "fps=1/10" -q:v 2 \\

thumbnails_%03d.jpg

# Best quality PNG thumbnail

ffmpeg -y -ss 00:00:05 -i input.mp4 \\

-frames:v 1 \\

thumbnail.png

```

### Node.js: Smart thumbnail (pick the most interesting frame)

```typescript

async function generateThumbnail(

videoPath: string,

outputPath: string,

timestamp?: number

): Promise<string> {

if (timestamp === undefined) {

// Default to 25% through the video — usually more interesting than the first frame

const { stdout } = await execFileAsync('ffprobe', [

'-v', 'quiet', '-print_format', 'json', '-show_format', videoPath

]);

const duration = parseFloat(JSON.parse(stdout).format.duration);

timestamp = duration * 0.25;

}

await execFileAsync('ffmpeg', [

'-y', '-ss', timestamp.toFixed(3), '-i', videoPath,

'-frames:v', '1', '-q:v', '2',

outputPath

]);

return outputPath;

}

```

---

## Watermark Removal (Crop)

Remove a watermark by cropping it out. This is the only reliable FFmpeg approach — there is no "inpainting" filter.

```bash

# Crop out a watermark in the bottom-right corner

# Removes 60px from the bottom and 120px from the right

ffmpeg -y -i input.mp4 \\

-vf "crop=iw-120:ih-60:0:0" \\

-c:v libx264 -crf 23 -preset medium -c:a copy \\

output_no_watermark.mp4

# Crop out a watermark at the top-left

# Removes 80px from the top and 200px from the left

ffmpeg -y -i input.mp4 \\

-vf "crop=iw-200:ih-80:200:80" \\

-c:v libx264 -crf 23 -preset medium -c:a copy \\

output_no_watermark.mp4

# Crop + scale back to original resolution (fills the gap)

ffmpeg -y -i input.mp4 \\

-vf "crop=iw-120:ih-60:0:0,scale=1920:1080" \\

-c:v libx264 -crf 23 -preset medium -c:a copy \\

output_cleaned.mp4

```

**Crop filter syntax:** `crop=out_w:out_h:x:y` — output width, output height, x offset from left, y offset from top.

**Note:** Cropping changes the aspect ratio/resolution. If the user needs the original dimensions, scale back up after cropping, though this may introduce slight softness.

---

## Logo Overlay (Branding)

Add a persistent logo/brand image to a video.

```bash

# Logo in the top-left corner with padding

ffmpeg -y -i video.mp4 -i logo.png \\

-filter_complex "overlay=20:20" \\

-c:v libx264 -crf 23 -preset medium -c:a copy \\

branded.mp4

# Logo in the bottom-right corner

ffmpeg -y -i video.mp4 -i logo.png \\

-filter_complex "overlay=W-w-20:H-h-20" \\

-c:v libx264 -crf 23 -preset medium -c:a copy \\

branded.mp4

# Logo with transparency (50% opacity)

ffmpeg -y -i video.mp4 -i logo.png \\

-filter_complex "[1:v]format=rgba,colorchannelmixer=aa=0.5[logo];[0:v][logo]overlay=W-w-20:20" \\

-c:v libx264 -crf 23 -preset medium -c:a copy \\

branded_subtle.mp4

# Logo scaled to a specific size (e.g., 100px wide, keep aspect ratio)

ffmpeg -y -i video.mp4 -i logo.png \\

-filter_complex "[1:v]scale=100:-1[logo];[0:v][logo]overlay=W-w-20:20" \\

-c:v libx264 -crf 23 -preset medium -c:a copy \\

branded_small.mp4

# Logo that appears only during the first 5 seconds

ffmpeg -y -i video.mp4 -i logo.png \\

-filter_complex "[1:v]scale=100:-1[logo];[0:v][logo]overlay=20:20:enable='between(t,0,5)'" \\

-c:v libx264 -crf 23 -preset medium -c:a copy \\

branded_intro.mp4

```

### Overlay position shortcuts

- Top-left: `overlay=20:20`
- Top-right: `overlay=W-w-20:20`

- Bottom-left: `overlay=20:H-h-20`
- Bottom-right: `overlay=W-w-20:H-h-20`

- Center: `overlay=(W-w)/2:(H-h)/2`

---

## Social Media Reframing

Reframe videos for different platforms with the correct aspect ratio and resolution.

### Platform Reference

| Platform | Aspect Ratio | Resolution | Duration | Codec |

|----------|-------------|------------|----------|-------|

| TikTok | 9:16 | 1080×1920 | 10–45s | H.264 |

| Instagram Reels | 9:16 | 1080×1920 | 10–30s | H.264 |

| Instagram Stories | 9:16 | 1080×1920 | 1–60s | H.264 |

| Instagram Feed | 1:1 or 4:5 | 1080×1080 or 1080×1350 | 3–60s | H.264 |

| YouTube Shorts | 9:16 | 1080×1920 | 15–60s | H.264 |

| YouTube (standard) | 16:9 | 1920×1080 | any | H.264 |

| X / Twitter | 16:9 | 1280×720 | 10–45s | H.264 |

| X / Twitter (square) | 1:1 | 720×720 | 10–45s | H.264 |

| Facebook Reels | 9:16 | 1080×1920 | 10–30s | H.264 |

| Facebook Feed | 16:9 or 1:1 | 1920×1080 or 1080×1080 | any | H.264 |

| LinkedIn | 16:9 or 1:1 | 1920×1080 or 1080×1080 | 10–60s | H.264 |

| Pinterest | 9:16 or 2:3 | 1080×1920 or 1000×1500 | 6–60s | H.264 |

| Snapchat Spotlight | 9:16 | 1080×1920 | 5–60s | H.264 |

### Strategy selection by conversion type

- **Landscape → Vertical (9:16):** Use blurred fill (Strategy 3) — looks polished on TikTok/Reels/Shorts
- **Landscape → Square (1:1):** Use blurred fill or center crop depending on framing

- **Vertical → Landscape (16:9):** Use blurred fill to avoid large black bars
- **Same orientation:** Use center crop or scale directly

- **4:5 portrait (Instagram Feed):** Use letterbox or blurred fill from 16:9

### Strategy 1: Center Crop

Crops from the center to fill the target ratio. Best when the subject is center-framed.

```bash

# 16:9 landscape → 9:16 vertical (TikTok/Reels) — center crop

ffmpeg -y -i input.mp4 \\

-vf "crop=ih*9/16:ih,scale=1080:1920" \\

-c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k \\

output_tiktok.mp4

# 16:9 landscape → 1:1 square (Instagram) — center crop

ffmpeg -y -i input.mp4 \\

-vf "crop=ih:ih,scale=1080:1080" \\

-c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k \\

output_instagram.mp4

# 9:16 vertical → 16:9 landscape — center crop

ffmpeg -y -i input.mp4 \\

-vf "crop=iw:iw*9/16,scale=1920:1080" \\

-c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k \\

output_youtube.mp4

# 9:16 vertical → 1:1 square — center crop

ffmpeg -y -i input.mp4 \\

-vf "crop=iw:iw,scale=1080:1080" \\

-c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k \\

output_square.mp4

```

### Strategy 2: Letterbox / Pillarbox (black bars)

Fits the entire video inside the target frame with black bars filling the gaps. No content is lost.

```bash

# 16:9 → 9:16 with black bars (pillarbox)

ffmpeg -y -i input.mp4 \\

-vf "scale=1080:-2,pad=1080:1920:(ow-iw)/2:(oh-ih)/2:black" \\

-c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k \\

output_tiktok_letterbox.mp4

# 16:9 → 1:1 with black bars

ffmpeg -y -i input.mp4 \\

-vf "scale=1080:-2,pad=1080:1080:(ow-iw)/2:(oh-ih)/2:black" \\

-c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k \\

output_square_letterbox.mp4

# 9:16 → 16:9 with black bars (pillarbox)

ffmpeg -y -i input.mp4 \\

-vf "scale=-2:1080,pad=1920:1080:(ow-iw)/2:(oh-ih)/2:black" \\

-c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k \\

output_youtube_letterbox.mp4

```

### Strategy 3: Blurred Fill (recommended for landscape → portrait)

Uses a blurred, scaled-up version of the video as background behind the original. Looks much more polished than black bars, especially for landscape-to-portrait conversion.

```bash

# 16:9 → 9:16 with blurred background fill (best for TikTok/Reels)

ffmpeg -y -i input.mp4 \\

-filter_complex "\\

[0:v]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,gblur=sigma=50[bg];\\

[0:v]scale=1080:1920:force_original_aspect_ratio=decrease[fg];\\

[bg][fg]overlay=(W-w)/2:(H-h)/2[outv]" \\

-map "[outv]" -map 0:a? \\

-c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k \\

output_tiktok_blur.mp4

# 16:9 → 1:1 with blurred background fill

ffmpeg -y -i input.mp4 \\

-filter_complex "\\

[0:v]scale=1080:1080:force_original_aspect_ratio=increase,crop=1080:1080,gblur=sigma=50[bg];\\

[0:v]scale=1080:1080:force_original_aspect_ratio=decrease[fg];\\

[bg][fg]overlay=(W-w)/2:(H-h)/2[outv]" \\

-map "[outv]" -map 0:a? \\

-c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k \\

output_square_blur.mp4

# 9:16 → 16:9 with blurred background fill

ffmpeg -y -i input.mp4 \\

-filter_complex "\\

[0:v]scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,gblur=sigma=50[bg];\\

[0:v]scale=1920:1080:force_original_aspect_ratio=decrease[fg];\\

[bg][fg]overlay=(W-w)/2:(H-h)/2[outv]" \\

-map "[outv]" -map 0:a? \\

-c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k \\

output_youtube_blur.mp4

# 16:9 → 4:5 portrait with blurred fill (Instagram Feed — preferred over 1:1)

ffmpeg -y -i input.mp4 \\

-filter_complex "\\

[0:v]scale=1080:1350:force_original_aspect_ratio=increase,crop=1080:1350,gblur=sigma=50[bg];\\

[0:v]scale=1080:1350:force_original_aspect_ratio=decrease[fg];\\

[bg][fg]overlay=(W-w)/2:(H-h)/2[outv]" \\

-map "[outv]" -map 0:a? \\

-c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k \\

output_instagram_feed_4x5.mp4

# 16:9 → 2:3 portrait with blurred fill (Pinterest)

ffmpeg -y -i input.mp4 \\

-filter_complex "\\

[0:v]scale=1000:1500:force_original_aspect_ratio=increase,crop=1000:1500,gblur=sigma=50[bg];\\

[0:v]scale=1000:1500:force_original_aspect_ratio=decrease[fg];\\

[bg][fg]overlay=(W-w)/2:(H-h)/2[outv]" \\

-map "[outv]" -map 0:a? \\

-c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k \\

output_pinterest_blur.mp4

```

### Multi-platform Export (Node.js)

Export to all platforms in one go:

```typescript

import { execFile } from 'child_process';

import { promisify } from 'util';

import * as path from 'path';

const execFileAsync = promisify(execFile);

interface PlatformSpec {

name: string;

width: number;

height: number;

suffix: string;

}

const PLATFORMS: Record<string, PlatformSpec> = {

tiktok: { name: 'TikTok', width: 1080, height: 1920, suffix: 'tiktok' },

instagram_reels: { name: 'Instagram Reels', width: 1080, height: 1920, suffix: 'ig_reels' },

reels: { name: 'Instagram Reels', width: 1080, height: 1920, suffix: 'ig_reels' },

instagram_stories: { name: 'Instagram Stories', width: 1080, height: 1920, suffix: 'ig_stories' },

instagram_feed: { name: 'Instagram Feed', width: 1080, height: 1080, suffix: 'ig_feed' },

instagram_feed_45: { name: 'Instagram Feed 4:5', width: 1080, height: 1350, suffix: 'ig_feed_4x5' },

youtube_shorts: { name: 'YouTube Shorts', width: 1080, height: 1920, suffix: 'yt_shorts' },

shorts: { name: 'YouTube Shorts', width: 1080, height: 1920, suffix: 'yt_shorts' },

youtube: { name: 'YouTube', width: 1920, height: 1080, suffix: 'youtube' },

twitter: { name: 'X / Twitter', width: 1280, height: 720, suffix: 'twitter' },

x: { name: 'X / Twitter', width: 1280, height: 720, suffix: 'twitter' },

twitter_sq: { name: 'X / Twitter Square', width: 720, height: 720, suffix: 'twitter_sq' },

facebook_reels: { name: 'Facebook Reels', width: 1080, height: 1920, suffix: 'fb_reels' },

facebook_feed: { name: 'Facebook Feed', width: 1920, height: 1080, suffix: 'fb_feed' },

linkedin: { name: 'LinkedIn', width: 1920, height: 1080, suffix: 'linkedin' },

pinterest: { name: 'Pinterest', width: 1080, height: 1920, suffix: 'pinterest' },

pinterest_2x3: { name: 'Pinterest 2:3', width: 1000, height: 1500, suffix: 'pinterest_2x3' },

snapchat: { name: 'Snapchat Spotlight', width: 1080, height: 1920, suffix: 'snapchat' },

};

async function reframeForPlatform(

inputPath: string,

platform: PlatformSpec,

outputDir: string,

strategy: 'crop' | 'letterbox' | 'blur' = 'blur'

): Promise<string> {

const ext = path.extname(inputPath);

const base = path.basename(inputPath, ext);

const outputPath = path.join(outputDir, `${base}_${platform.suffix}${ext}`);

const { width, height } = platform;

let filterComplex: string;

switch (strategy) {

case 'crop':

filterComplex = `scale=${width}:${height}:force_original_aspect_ratio=increase,crop=${width}:${height}`;

break;

case 'letterbox':

filterComplex = `scale=${width}:${height}:force_original_aspect_ratio=decrease,pad=${width}:${height}:(ow-iw)/2:(oh-ih)/2:black`;

break;

case 'blur':

filterComplex = [

`[0:v]scale=${width}:${height}:force_original_aspect_ratio=increase,crop=${width}:${height},gblur=sigma=50[bg]`,

`[0:v]scale=${width}:${height}:force_original_aspect_ratio=decrease[fg]`,

`[bg][fg]overlay=(W-w)/2:(H-h)/2[outv]`

].join(';');

break;

}

const args = ['-y', '-i', inputPath];

if (strategy === 'blur') {

args.push('-filter_complex', filterComplex, '-map', '[outv]', '-map', '0:a?');

} else {

args.push('-vf', filterComplex);

}

args.push(

'-c:v', 'libx264', '-crf', '23', '-preset', 'medium',

'-c:a', 'aac', '-b:a', '128k',

outputPath

);

await execFileAsync('ffmpeg', args);

return outputPath;

}

async function exportAllPlatforms(

inputPath: string,

outputDir: string,

platforms: string[] = ['youtube', 'tiktok', 'instagram', 'twitter'],

strategy: 'crop' | 'letterbox' | 'blur' = 'blur'

) {

const results: Array<{ platform: string; path: string }> = [];

for (const key of platforms) {

const spec = PLATFORMS[key];

if (!spec) continue;

console.log(`Reframing for ${spec.name} (${spec.width}x${spec.height})...`);

const outPath = await reframeForPlatform(inputPath, spec, outputDir, strategy);

results.push({ platform: spec.name, path: outPath });

console.log(` → ${outPath}`);

}

return results;

}

```
