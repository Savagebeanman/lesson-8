while (true) {
    console.log("Light level in lux is: " + input.lightLevel())
    if (input.lightLevel() >= 10) {
        light.setAll(light.rgb(255, 0, 0))
    } else if (input.lightLevel() < 10) {
        light.setAll(light.rgb(0, 255, 0))
    }
    
}
