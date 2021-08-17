<p align="center">
<a href="https://dscommunity.in">
	<img src="https://github.com/Data-Science-Community-SRM/template/blob/master/Header.png?raw=true" width=80%/>
</a>
	<h2 align="center">  ASTRO NUMBERS  </h2>
	<h4 align="center">  This project performs digit recognition using deep learning concepts. It can classify an image into 10 classes.We have built a     Convolutional Neural Network (CNN) model using most popular Google library Tensorflow to recognize handwritten digits.  <h4>
</p>

---
[![DOCS](https://img.shields.io/badge/Documentation-see%20docs-green?style=flat-square&logo=appveyor)](https://github.com/Data-Science-Community-SRM/Hand-Written-Digit-Classification-Recognition/blob/master/README.md) 
  [![UI ](https://img.shields.io/badge/User%20Interface-Link%20to%20UI-orange?style=flat-square&logo=appveyor)](https://data-science-community-srm.github.io/Hand-Written-Digit-Classification-Recognition/index.html)
	
## Data preprocessing steps:
- [ ] Splitting the data into training, testing and validation sets.
- [ ] Flattening the images and displaying it.
- [ ] Checking the number of instances for each digit.
- [ ] Plotting graphs and charts for easier understanding.<br>
The MNIST dataset is an acronym that stands for the Modified National Institute of Standards and Technology dataset.It is a dataset of 70,000 small square 28×28 pixel grayscale images of handwritten single digits between 0 and 9.In this project we have used it to classify a given image of a handwritten digit drawn on a canvas into one of 10 classes representing integer values from 0 to 9, inclusively.


## Model Construction:
Deep learning model:
After manually pre-processing the dataset, we come to the part where we use concepts of Convolutional Neural Network and Transfer learning to build and train a model that classifies the handwritten digits.The 10 classes of digits are 0,1,2,3,4,5,6,7,8,9.
- [ ] This model used in Astro Numbers has been trained to detect 10 classes of objects: Numbers from 0-9 using deep learning on the CNN model. 
It contains 2 Convolution layers, 1 dense layer with 128 nodes (ReLU), and a softmax layer with 10 output nodes using TensorFlow and its libraries.
- [ ] The first convolutional layer is added with a small filter size (3,3) and a modest number of filters (64) followed by a max pooling layer. 
- [ ] The second convolutional layer is added with a small filter size (3,3) and a modest number of filters (128) followed by a max pooling layer. <br>

<p align="center">
<img src = "https://cdn.discordapp.com/attachments/863847804253896704/876363980157911160/9k0A.png" style=" text-align:center;"><br>
</p>
<br>
	
- [ ] The model is compiled using the adam optimizer and the categorical cross-entropy loss function will be optimized which is suitable for multi-class classification.We are monitoring the classification accuracy metric since we have the same number of examples in each of the 10 classes.
	<br>
- [ ] The final trained model resulted in an accuracy around 99.71% on the dataset with 70,000 images.
	<br>
- [ ] The model can be experimented , the user can provide the digit input to the canvas and the model will detect which number it is. 

## Functionalities
- [ ]   Astro numbers help primary teachers to give the students a unique experience in solving maths problems. 
- [ ]   Works on a canvas providing an easy drawing interface.
- [ ]   The web based application interface of Astro numbers uses a CNN model to classify the answers drawn by students.
- [ ]   Assessment can be done by teachers and the final scores will appear on the screen.

## Instructions to run:
- [ ] ```pip install --upgrade pandas```
- [ ] ```pip install --upgrade matplotlib```
- [ ] ```pip install --upgrade seaborn```
- [ ] ```pip install --upgrade numpy```
- [ ] ```pip install --upgrade tensorflow```
- [ ] ```python -m http.server 8000```

## Project architecture:
Astro-Numbers uses Tensorflow and Keras libraries to build a sequential model with 2 `Conv2D` layers.
We use `batch_normalization` at the end of every layer for higher accuracy. Activation `relu` worked best for the dataset. 
For the output layer, a `dense` layer was used with `softmax` activation.The tabular explanation of the same can be seen below. <br>
<p align="center">
<img src = "https://cdn.discordapp.com/attachments/863847804253896704/876363853078884372/unknown.png" align="centre">
</p>	
<br>
	
## Model loss:
The following is the validation and training loss of the above model. <br>
<p align="center">
<img src = "https://cdn.discordapp.com/attachments/865930287359983647/876370326320218192/Screenshot_2021-08-15_at_1.12.17_PM.png" align="centre"><br>
</p>
<br>
As seen, there is very little noise in our model. This is due the fact that we have used the `adam` optimizer. 
<br>
	
## Model accuracy:
The following is the validation and training accuracy of the above model. <br>
<p align="center">
<img src = "https://cdn.discordapp.com/attachments/865930287359983647/876370323837181962/Screenshot_2021-08-15_at_1.11.52_PM.png" align="middle"><br>
</p><br>
As of a typical Conv2D model, we see that the accuracy keeps improving in performance compared to the baseline.




## Preview
<p align="center">
<img src="https://github.com/Data-Science-Community-SRM/Hand-Written-Digit-Classification-Recognition/blob/master/Astrogifnew.gif" width="800" height="400" />
</p><br>
	
## Functionalities
- [ ]   Astro numbers help primary teachers to give the students a unique experience in solving maths problems. 
- [ ]   Works on a canvas providing an easy drawing interface.
- [ ]   The web based application interface of Astro numbers uses a CNN model to classify the answers drawn by students.
- [ ]   Assessment can be done by teachers and the final scores will appear on the screen.

<br>




## Contributors

<table>
<tr align="center">


<td>

Kruthi M

<p align="center">
<img src = "https://cdn.discordapp.com/attachments/835567060271628319/876360981398310962/WhatsApp_Image_2021-08-15_at_12.34.25_PM.jpeg?raw=true"  height="120" alt="Kruthi M">
</p>
<p align="center">
<a href = "https://github.com/Kruthim1304"><img src = "http://www.iconninja.com/files/241/825/211/round-collaboration-social-github-code-circle-network-icon.svg" width="36" height = "36"/></a>
<a href = "https://www.linkedin.com/in/kruthi-m-49b300200/">
<img src = "http://www.iconninja.com/files/863/607/751/network-linkedin-social-connection-circular-circle-media-icon.svg" width="36" height="36"/>
</a>
</p>
</td>


<td>

Abhay Lal

<p align="center">
<img src = "https://cdn.discordapp.com/attachments/863847804253896704/876356351041863700/unknown.png?raw=true"  height="120" alt="Abhay Lal">
</p>
<p align="center">
<a href = "https://github.com/abhay-lal"><img src = "http://www.iconninja.com/files/241/825/211/round-collaboration-social-github-code-circle-network-icon.svg" width="36" height = "36"/></a>
<a href = "https://www.linkedin.com/in/abhay-l-6850111bb/">
<img src = "http://www.iconninja.com/files/863/607/751/network-linkedin-social-connection-circular-circle-media-icon.svg" width="36" height="36"/>
</a>
</p>
</td>



<td>

Jahnavi Darbhamulla

<p align="center">
<img src = "https://cdn.discordapp.com/attachments/863847804253896704/876358992031514634/unknown.png?raw=true"  height="120" alt="Jahnavi Darbhamulla">
</p>
<p align="center">
<a href = "https://github.com/JahnaviDarbhamulla"><img src = "http://www.iconninja.com/files/241/825/211/round-collaboration-social-github-code-circle-network-icon.svg" width="36" height = "36"/></a>
<a href = "https://www.linkedin.com/in/jahnavi-darbhamulla-0a4280201/">
<img src = "http://www.iconninja.com/files/863/607/751/network-linkedin-social-connection-circular-circle-media-icon.svg" width="36" height="36"/>
</a>
</p>
</td>


<td>

Aryan Karoliwal

<p align="center">
<img src = "https://cdn.discordapp.com/attachments/863847804253896704/876356501961338932/1609862856356.png?raw=true"  height="120" alt="Aryan Karoliwal">
</p>
<p align="center">
<a href = "https://github.com/xxNitroprasad"><img src = "http://www.iconninja.com/files/241/825/211/round-collaboration-social-github-code-circle-network-icon.svg" width="36" height = "36"/></a>
<a href = "https://www.linkedin.com/in/aryankaroliwal/">
<img src = "http://www.iconninja.com/files/863/607/751/network-linkedin-social-connection-circular-circle-media-icon.svg" width="36" height="36"/>
</a>
</p>
</td>
</tr>
</table>

  
## License
[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

<p align="center">
	Made with :heart: by <a href="https://dscommunity.in">DS Community SRM</a>
</p>

