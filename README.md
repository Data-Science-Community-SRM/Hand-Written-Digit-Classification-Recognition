<p align="center">
<a href="https://dscommunity.in">
	<img src="https://github.com/Data-Science-Community-SRM/template/blob/master/Header.png?raw=true" width=80%/>
</a>
	<h2 align="center">  ASTRO NUMBERS  </h2>
	<h4 align="center">  This project performs digit recognition using deep learning concepts. It can classify an image into 10 classes.We have built a Multilayer perceptron (MLP) model using most popular Google library Tensorflow to recognize handwritten digits.  <h4>
</p>

---
[![DOCS](https://img.shields.io/badge/Documentation-see%20docs-green?style=flat-square&logo=appveyor)](https://github.com/Data-Science-Community-SRM/Hand-Written-Digit-Classification-Recognition/blob/master/README.md) 
  [![UI ](https://img.shields.io/badge/User%20Interface-Link%20to%20UI-orange?style=flat-square&logo=appveyor)](https://data-science-community-srm.github.io/Hand-Written-Digit-Classification-Recognition/index.html)
	
	A Multi Layer Perceptron is a feedforward neural network, which means that the data is transmitted from the input layer to the output layer in the forward direction.
 A perceptron is a single neuron model that was a precursor to larger neural networks. The Perceptron consists of an input layer and an output layer which are fully connected.  MLPs have the same input and output layers but may have multiple hidden layers in between them.
	
	The MNIST dataset is an acronym that stands for the Modified National Institute of Standards and Technology dataset.It is a dataset of 70,000 small square 28×28 pixel grayscale images of handwritten single digits between 0 and 9.In this project we have used it to classify a given image of a handwritten digit drawn on a canvas into one of 10 classes representing integer values from 0 to 9, inclusively.
	
## Data preprocessing steps:
- [ ] Splitting the data into training, testing and validation sets.
- [ ] Flattening the images and displaying it.
- [ ] Checking the number of instances for each digit.
- [ ] Plotting graphs and charts for easier understanding.<br>



## Model Construction:
Deep learning model:
After manually pre-processing the dataset, we come to the part where we use concepts of Multilayer perceptron to build and train a model that classifies the handwritten digits.The 10 classes of digits are 0,1,2,3,4,5,6,7,8,9.
- [ ] This model used in Astro Numbers has been trained to detect 10 classes of objects: Numbers from 0-9 using deep learning on the MLP model. 
- [ ] It contains 2 hidden layers, 1 dense layer with 512 nodes (ReLU),1 dense layer with 64 nodes (ReLU) and a softmax layer with 10 output nodes using TensorFlow and its libraries.

	
- [ ] The model is compiled using the adam optimizer and the categorical cross-entropy loss function will be optimized which is suitable for multi-class classification.We are monitoring the classification accuracy metric since we have the same number of examples in each of the 10 classes.
	<br>
- [ ] The final trained model resulted in an accuracy around 97.67% on the dataset with 70,000 images.
	<br>
- [ ] The model can be experimented , the user can provide the digit input to the canvas and the model will detect which number it is. 

## Functionalities
- [ ]   Astro numbers help primary teachers to give the students a unique experience in solving maths problems. 
- [ ]   Works on a canvas providing an easy drawing interface.
- [ ]   The web based application interface of Astro numbers uses a MLP model to classify the answers drawn by students.
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
	
<img src ="https://user-images.githubusercontent.com/76477365/134796418-38444808-8d85-4791-8a80-9933201a42f3.png" style="width:500px;height:600px" align="centre">
</p>	
<br>
	
## Model loss:
The following is the validation and training loss of the above model. <br>
<p align="center">
<img src = "https://user-images.githubusercontent.com/76477365/134801056-99880c05-e1ad-4fd9-a93d-f03ccc436213.jpeg" style="width:400px;height:300px" align="centre"><br>
</p>
<br>
As seen, there is very little noise in our model. This is due the fact that we have used the `adam` optimizer. 
<br>
	
## Model accuracy:
The following is the validation and training accuracy of the above model. <br>
<p align="center">
<img src = "https://user-images.githubusercontent.com/76477365/134800727-84411fd5-7bc5-4ffa-a21e-0e745e1bfb5f.jpeg" style="width:500px;height:300px" align="middle"><br>
</p><br>






## Preview
<p align="center">
<img src="https://github.com/Data-Science-Community-SRM/Hand-Written-Digit-Classification-Recognition/blob/master/Astrogifnew.gif" width="800" height="400" />
<br>
<br>
</p><br>
You can check out our website in the link given here: https://data-science-community-srm.github.io/Hand-Written-Digit-Classification-Recognition/index.html


<br>




## Contributors

<table>
<tr align="center">


<td>

Kruthi M

<p align="center">
<img src = "https://github.com/Data-Science-Community-SRM/Hand-Written-Digit-Classification-Recognition/blob/master/Doc%20images/k.jpg"  height="120" alt="Kruthi M">
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
<img src = "https://github.com/Data-Science-Community-SRM/Hand-Written-Digit-Classification-Recognition/blob/master/Doc%20images/a.png"  height="120" alt="Abhay Lal">
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
<img src = "https://github.com/Data-Science-Community-SRM/Hand-Written-Digit-Classification-Recognition/blob/master/Doc%20images/j.jpg" height="120" alt="Jahnavi Darbhamulla">
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
<img src = "https://github.com/Data-Science-Community-SRM/Hand-Written-Digit-Classification-Recognition/blob/master/Doc%20images/m.png"  height="120" alt="Aryan Karoliwal">
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

