function getUnitConverterHTML() {
    return `
        <main>
        <h1>📏Unit Converter</h1>
        <div class="options">
            <ul id="options">
                <li data-category="length">Length</li>
                <li data-category="weight">Weight</li>
                <li data-category="temp">Temp</li>
                <li data-category="time">Time</li>
                <li data-category="speed">Speed</li>
            </ul>
        </div>
        <div class="conversion">
            <div>
                <h3>FROM</h3>
                <input type="number" id="from">
                <select name="" id="from-options">
                    <option value="km">Kilometer(km)</option>
                    <option value="m">Meter(m)</option>
                    <option value="cm">Centimeter(cm)</option>
                    <option value="mm">Milimeter(mm)</option>
                    <option value="mi">Mile(mi)</option>
                    <option value="yd">Yard(yd)</option>
                    <option value="ft">Foot(ft)</option>
                    <option value="in">Inch(in)</option>
                </select>
            </div>
            <div>
                <h3>TO</h3>
                <input type="number" readonly id="to">
                <select name="" id="to-options">
                    <option value="km">Kilometer(km)</option>
                    <option value="m">Meter(m)</option>
                    <option value="cm">Centimeter(cm)</option>
                    <option value="mm">Milimeter(mm)</option>
                    <option value="mi">Mile(mi)</option>
                    <option value="yd">Yard(yd)</option>
                    <option value="ft">Foot(ft)</option>
                    <option value="in">Inch(in)</option>
                </select>
            </div>
            <h3>RESULT</h3>
            <div class="result">
                <input type="text" readonly id="result">
            </div>
            </div>
            </main>
            
    <style>
    main{
        border: 2px solid black;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap:10px;
    }
    .options ul{
        display: flex;
        list-style: none;
        gap: 40px;
        justify-content: center;
        align-items: center;    
    }
    .options ul li{
        user-select: none;
    }
        
    input{
        padding: 0.9rem;
        border-radius : 10px;
        border: 2px solid var(--border-color);
        background: var(--surface-color);
        color: var(--text-color);
    }
    select{
        padding: 0.9rem;
        border-radius: 10px;
        border: 2px solid var(--border-color);
        background: var(--surface-color);
        color: var(--text-color);
    }
    .conversion{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
    .options {
        border: 2px solid #a7f3b5;
        padding:10px;
        border-radius:10px;
        cursor:pointer;
        background: #a7f3b5;
        color: #065F46
    }
    .options ul li:hover {
        color: black;
        border-radius: 3px;
    }
    .result input{
        color: #065F46;
        font-weight:600;
        width:300px;
        text-align:center;
    }
        
    </style>

    `
}


function initUnitConverter() {
    // ==== DOM ELEMENTS ===

    const fromOpt = document.getElementById("from-options");
    const toOpt = document.getElementById("to-options");


    // ==== STATE ===

    let currentCategory = "length";


    // ==== UNITS ===

    const units = {
        length: {
            km: { name: "Kilometer", factor: 1000 },
            m: { name: "Meter", factor: 1 },
            cm: { name: "Centimeter", factor: 0.01 },
            mm: { name: "Millimeter", factor: 0.001 },
            mi: { name: "Mile", factor: 1609.344 },
            yd: { name: "Yard", factor: 0.9144 },
            ft: { name: "Feet", factor: 0.3048 },
            in: { name: "Inch", factor: 0.0254 },
        },
        weight: {
            kg: { name: "Kilogram", factor: 1000 },
            g: { name: "Gram", factor: 1 },
            mg: { name: "Milligram", factor: 0.001 },
            lb: { name: "Pound", factor: 453.592 },
        },
        temp: {
            c: { name: "Celsius" },
            f: { name: "Fahrenheit" },
            k: { name: "Kelvin" }
        },
        time: {
            hr: { name: "Hour", factor: 3600 },
            min: { name: "Minute", factor: 60 },
            sec: { name: "Second", factor: 1 }
        },
        speed: {
            "km/h": { name: "km/h", factor: 0.277778 },
            "m/s": { name: "m/s", factor: 1 },
            mph: { name: "mph", factor: 0.44704 },
            "ft/s": { name: "ft/s", factor: 0.3048 }
        }
    }


    // ==== FORMATTING ====

    function formatResult(value) {
        if (isNaN(value) || value === null) return "Invalid input";
        // Round to 6 decimal places, then strip trailing zeros
        return parseFloat(value.toFixed(6)).toString();
    }


    // ==== EVENT LISTENERS ====

    document.getElementById("from").addEventListener("input", convert);
    document.getElementById("from-options").addEventListener("change", convert);
    document.getElementById("to-options").addEventListener("change", convert);
    document.querySelectorAll("#options li").forEach(li => {
        li.addEventListener("click", () => {
            currentCategory = li.dataset.category;
            updateOptions();
            convert();
        });
    });


    // ==== UPDATE OPTIONS ====

    function updateOptions() {
        fromOpt.innerHTML = "";
        toOpt.innerHTML = "";
        Object.keys(units[currentCategory]).forEach(unit => {
            const option1 = document.createElement("option");
            option1.value = unit;
            option1.textContent = units[currentCategory][unit].name;
            fromOpt.appendChild(option1);
            const option2 = document.createElement("option");
            option2.value = unit;
            option2.textContent = units[currentCategory][unit].name;
            toOpt.appendChild(option2);
        })
    }


    // ==== CONVERSION ====

    function convert() {
        let inpVal = Number(document.getElementById("from").value);
        let inpOpt = document.getElementById("from-options").value;
        let outVal = document.getElementById("to");
        let outOpt = document.getElementById("to-options").value;
        let result = document.getElementById("result");
        const fromName = units[currentCategory][inpOpt].name;
        const toName = units[currentCategory][outOpt].name;

        // TEMP CONVERSION 

        if (currentCategory === "temp") {
            let tempVal;
            if (inpOpt === "c") {
                tempVal = inpVal;
            }
            else if (inpOpt === "f") {
                tempVal = (inpVal - 32) * 5 / 9;
            }
            else if (inpOpt === "k") {
                tempVal = inpVal - 273.15;
            }
            let tempOut;
            if (outOpt === "c") {
                tempOut = tempVal;
            }
            else if (outOpt === "f") {
                tempOut = (tempVal * 9 / 5) + 32;
            }
            else if (outOpt === "k") {
                tempOut = tempVal + 273.15;
            }
            outVal.value = formatResult(tempOut);
            result.value = `${inpVal} ${fromName} = ${outVal.value} ${toName}`
            return;
        }

        // OTHER CONVERSIONS 

        const base = inpVal * units[currentCategory][inpOpt].factor;
        const rawOut = base / units[currentCategory][outOpt].factor;
        outVal.value = formatResult(rawOut);

        result.value = `${inpVal} ${fromName} = ${outVal.value} ${toName}`

    }


    // ==== INITIALIZATION ====
    updateOptions();

    document.getElementById("from").value = 1;
    fromOpt.value = "km";
    toOpt.value = "m";

    convert();
}