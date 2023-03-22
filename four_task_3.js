(function (){
    function calcRectangleArea(width, height) {
        if (typeof width !== "number" || typeof height !== "number") {
            throw new Error("Параметри повинні бути числами")
        }
        return width * height
    }

        try{
            const width = Number(prompt("enter the width of the rectangle"));
            const height = Number(prompt("enter the height of the rectangle"));
            const area = calcRectangleArea(width, height);
            console.log(`площа прямокутника зі шириною ${width} та висотою ${height} дорівнює ${area}`)
        } catch (e){
            console.error(`помилка: ${e.message}`)
        }

})()