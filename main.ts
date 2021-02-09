while (true) {
    console.log("Light sound level in is: " + input.soundLevel())
    if (input.soundLevel() + 4.6 > 50) {
        light.setAll(light.rgb(255, 0, 0))
    } else {
        light.clear()
    }
    
}
