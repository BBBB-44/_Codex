## transparency / depth sorting problem caused by “image as plane” materials.

Fix (this usually solves it immediately)
1. Select the sewer plane

Go to Material Properties → Settings

2. Change:
Blend Mode → Alpha Hashed (best quick fix)
or → Alpha Clip (if you want sharp edges)
3. Also set:
Shadow Mode → match the above (Hashed or Clip)


## Import an image as a texture, you can use the Shading workspace for a node-based approach or the Material Properties panel for a quick setup. 

Method 1: Drag-and-Drop (Fastest)

Open the Shading workspace or the Node Editor. 
Locate your image file in your computer’s file browser.
Drag and drop the image file directly into the Node Editor. This automatically creates an Image Texture node. 
Connect the Color output of the Image Texture node to the Base Color input of the Principled BSDF node.
