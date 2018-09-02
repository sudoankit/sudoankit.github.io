---
layout: post
comments: true
title: "Spring, schools and sorcery!" 
excerpt: "My teachings at a school about technology and science during spring with a little sorcery."
date: 2018-05-03 07:31:03 +0530
mathjax: true

---
<style>
p {
  text-align: justify;
}

</style>


<div class="imgcap">
<img src="/assets/school/spring.jpg" style="border:border:1px solid #021a40; width:100%; height: 40%">
<div class="thecap" style="text-align:center">
So beautiful! Copyright, debihaden.co.uk</div>
</div>
It's spring and it's beautiful! At least where I'm at, Kerala. Still, it doesn't look like that picture. :(

The weather was fantastic and didn't let me sit inside for long. I wanted to go out, enjoy and probably do something productive and then it hit me. Why not teach?

There are a few schools nearby my house and from those I chose [Spring Valley School](https://en.wikipedia.org/wiki/Spring_Valley_School) (becasue it's spring, you got that right!) to teach some classes on a very basic intuition of computer science and a bit genetic engineering. Theory never is great without some real practical experiments so I conducted a small workshop about neural networks. 

Let's see all this in a bit of detail. 


#### CRISPR

I needed to try and create some intuition of genetic engineering. I went with CRISPR as a motivation to learn this and also we did a small experiment on a centrifuge.

<div class="imgcap">
<img src="/assets/school/crispr.jpg" style="border:border:1px solid #021a40; width:100%; height: 40%">
<div class="thecap" style="text-align:center">
My CRISPR slide.</div>
</div>

**Observations:** Visualizing protein structure using AR would be pretty cool. <sup><a href="#first">1</a></sup>

---

#### Object Recognition

Second, I taught the students to make their own neural network. I really must say the school was extremely supportive to arrange all of this.
A demo was of object recognition using `keras` pre trained `resnet` and `VGG19`, which I believe children loved it as everyone was crazily taking random pictures to mess with the neural net.

<div class="imgcap">
<img src="/assets/school/nn.png" style="border:border:1px solid #021a40; width:100%; height: 40%">
<div class="thecap" style="text-align:center">
A simple neural network, figure by <a href="www.neuralnetworksanddeeplearning.com">Michael Nielsen.</a></div>
</div>


Here's an outline of source code student's followed. (I can't put everyone's as it's different and they own the right to their code.)

```python
from keras.applications import ResNet50
from keras.applications import VGG19
from keras.applications import imagenet_utils
#...import other helper libs such as numpy, cv2, argparse


image = load_img(args["image"], target_size=inputShape)
#..preprocess, img_to_array, expand_dims, etc

prediction_img = model.predict(image)
P = imagenet_utils.decode_predictions(prediction_img)

#iterate through P and store labels,imagenet-id and use cv2 to display.

```

This hands-on approach was really beneficial in developing intuition and made the student quite curious. 

<div class="imgcap">
<img src="/assets/school/obj-recog.png" style="border:border:1px solid #021a40; width:100%; height: 40%">
<div class="thecap" style="text-align:center"> Thoughtful questions after this experiment. Also lot of humour and laughter was experienced. :) 
 </div>
</div>



<b>Question 1:</b> <i>What if the dataset was not labelled?</i>
<br>
<b>Answer and Observations: </b> Memorization in a neural network. Would it still classify/identify correctly? A neural net retaining the learning property even if trained with unlabeled dataset?



<b>Question 2:</b> <i>Why didn’t it work for my image?</i>
<br>
<b>Answer and Observations: </b>  Well, it’s not in the dataset. VGGNet, ResNet don’t have labelled data for your image.  As you might have found out, we haven’t created a general AI yet. An AI which would play chess, help the blind to cross roads and sell you an item just as a freaking salesperson is far off yet.

<hr>

We went ahead with "behind the awesome with science and math" sections on how SpaceX landed with precision (convex optimization), how does Waymo drive autonomously (LIDAR, Sensors and a bit about SLAM) with some touches of what the brain connectome is and video games.


#### Safe AI.

Third, a general idea on AI and mostly towards a community which believe AI is safe and really useful to have. Safer AI by demystifying media.

We talked about Sophia, how it's not exactly what the media says and it's great NLP with excellent PR.

As this topic would need me to go deeply into ethics, it's better left for another post or maybe **just not**.

#### SpaceX Falcon Heavy.

The recent news about SpaceX landing a used rocket back was just fabulous. How did they do it? Children get curious and dream of making something similar when they grow up and I thought why not fuel this dream a bit further by explaining a bit of math and the path they should choose? 

Enter the SpaceX Slide which brielfy taught about 

<div class="imgcap">
<img src="/assets/school/spaceX-Explanation.png" style="border:border:1px solid #021a40; width:100%; height: 40%">
<div class="thecap" style="text-align:center">
Explaining this kids a simple contraint problem! Copyrights: (NAE Bridge/Lars Blackmore/SpaceX) </div>
</div>

### Sorcery.
---
<div class="imgcap">
<img src="/assets/school/me.png" width="50%">
<div class="thecap" style="text-align:center">
When you allow kids to draw on your photo. Sorcery!</div>
</div>

haha, someone started writing the formular for angular velocity!!?, someone drew horns, someone a hat, someone gave me muscles!, I have no clue what that red thing is on the chair!

The best feeling I got is when someone wrote "come again!". 


I will!

<hr>


#### EDITS + UPDATES
<div id="first">

<b>1:</b>

I tried to visualize a DNA strand using Vuforia and Unity and results are great! The only bad review from kids was the 3D model which I had freely downloaded. :(

I hope I'll try to make my own blender, perhaps model and open source this!
<br>
<br>

<div class="imgcap">
<img src="/assets/school/dna-ar.png" style="border:border:1px solid #021a40; width:100%; height: 40%">
<div class="thecap" style="text-align:center">
DNA AR Model using Vuforia and Unity</div>
</div>
</div>


---

More references.

Spring Valley School for allowing me to do this, Wikipedia, Nat and Friends, Google Search, 

This was a fantastic experience in my life and I totally suggest you to try teaching at random schools. It's so much fun!

Thank you for the love, fam!

**Ankit**

---




