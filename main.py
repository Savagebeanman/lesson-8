while True:
    print("Light sound level in is: " + (input.sound_level()))
    if (input.sound_level() + 4.6) > 50:
        light.set_all(light.rgb(255,0,0))
    else:
        light.clear()