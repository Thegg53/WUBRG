PS: I went a little overboard trying to make the documentation decent :D . Technically, there were much, much simpler ways to solve the problem (scrapping the whole classes and objects for example). It was an interesting task, different and challenging on deciding how much from the original code to keep, and what to throw away, as well as interpreting the pretended input that runs.
I would, in a real world,try to make the calls to the program simpler (getting rid of all those bools in the cmd line)

---
## Usage
How to run the program:
1. In the root of the project:


`node ./src/index.js`

2. From somewhere else

`node path/to/project/folder/src/index.js`

You should expect an error message that will guide you.

(an example of a complete call that work successfully is `node ./src/index.js "blue, red, black, green, white, green, blue, red, red" hex false` ) -> yes, I allowed repeated colors, doesnt hurt anyone



---
# Notes and thoughts during development

Support WUBRG is simple enough, create a couple more objects from Color. The Color should also have RGB and Hex properties.

There is no need for all those boolean, one single array should get the colors as well as the order.

A flag should control if the users want RGB or hex. Edit: allow both, set that as default.

A flag should control sync vs async. 


---

# code-challenge
A code challenge used to assess developers knowledge and skills

### Scenario
A developer has tried to do a task that you must now take over and complete.

The task has been extended with additional requirements after the developer left.

OBS: The API mock must be used and it must not be changed.

### Requirements
- It must be possible to run the program and get back the colors green, blue and red in HEX format.
- It must be possible to define the colors using their names like red, blue and green.
- It must be possible to define the order the colors are returned.

### New additional requirements
- The program must support the colors white and black.
- The program must be able to return the RGB values.
- It must be possible to run the program asynchronously getting all the colors at the same time
- It must be possible to run the program synchronously getting one color a time
