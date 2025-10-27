const colorSchemeForm = document.getElementById("color-scheme-form")
colorSchemeForm.addEventListener('submit',function(e){
    e.preventDefault()
    const formData = new FormData(colorSchemeForm)
    const color = formData.get("color")
    const mode = formData.get("mode")

    fetch(`https://www.thecolorapi.com/scheme?hex=${color.slice(1)}&mode=${mode}&count=5`)
        .then(res => res.json())
        .then(data => renderColorSchema(data.colors))
})

function renderColorSchema(colors){
    document.getElementById("colors").innerHTML = colors.map(
        color =>{ 
        const colorHexValue = color.hex.value
        return `
        <div class='color'>
            <div class='color-banner' style="background-color:${colorHexValue}"></div>
            <p>${colorHexValue}</p>
        </div>`
        }
    ).join('')
}