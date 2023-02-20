## Cover and Image Upload Section
![image](https://user-images.githubusercontent.com/90734286/220161121-622c7882-f6d1-4dc9-8ffa-e8abb7be2dce.png)

## News Section
![image](https://user-images.githubusercontent.com/90734286/220161166-a70b6ed4-6668-4057-9302-3d4b733c8c55.png)


## Inspiration 💡

As the issue of global warming becomes more pressing, we start to think about ways to mitigate its impact in our daily lives. One such area of concern is waste management, where there is an urgent need for more efficient methods to sort and recycle waste. With the growing amount of waste being produced each day, traditional manual sorting methods are becoming less and less effective.

To address this challenge, our hackathon project leverages the power of **machine learning algorithms** to classify different types of waste. This not only reduces the environmental impact of waste but also provides an opportunity for waste reuse and recycling. Through this project, we hope to play a small but meaningful role in creating a cleaner and greener future for generations to come.

## What it does 📖

Our hackathon project utilizes machine learning to classify six common types of garbage, including cardboard, glass, metal, paper, plastic, and trash. The process is simple: a user can upload an image of the waste, and our model is able to accurately identify its type. This not only helps in streamlining the waste management process, but also encourages proper waste disposal and recycling. In addition, we have also included a page on our platform where users can read up on eco-related news, further promoting environmental awareness and sustainability. With the integration of cutting-edge technology and a focus on education, our project aims to make a positive impact on the waste management industry and the planet at large.

## How we built it 🔧

🪜 ML Model using PyTorch: Our website features an image classification model that is trained on a specific dataset and built on top of PyTorch's VIT pre-trained model. The user can upload an image, which is then sent to the model for classification. The identified type of garbage will be displayed on the screen.

🪜 News section using Climate Change Live API: The news section of our website is generated through the Climate Change Live API, which provides daily updated news articles from major news agencies. We have fetched the data from the API and created a frontend container to display the results.

🪜 Front-End: Our website is designed as a single-page site with two sections that can be accessed by scrolling up and down. The components are rendered using ReactStrap. To improve the design, we have added a picture background and customized the font. Additionally, we have incorporated attractive design elements to enhance the overall look of the site.

## Challenges we ran into 📎

We initially faced challenges with React JS due to our limited experience with the framework. Simple issues such as multiple event listeners resulted in unexpected outputs. After successfully developing the ML algorithm for training and testing the garbage-image data, hosting both the frontend and backend and effectively connecting them proved to be even more challenging. To overcome these challenges, we decided to utilize a trained ML API, which can be easily integrated into our website, similar to how we connect to news sources.

## Accomplishments that we're proud of 🌟

We are proud of our ability to quickly learn how to build a front-end framework using React JS from scratch, challenging our capacity for rapid acquisition of new knowledge. We are also proud of our effective communication and collaboration skills as a team, particularly through our use of the divide and conquer approach.

## What we learned 📰

The more we work with React JS, the more we appreciate its power. Its modular structure makes it more flexible than the previous language we used. The reusability feature of React JS also proved to be extremely helpful, as solving one component allowed us to resolve a series of related problems. Our experience with APIs has also improved our ability to manage data flow between the frontend and backend. Despite not having prior experience working together on a project, we were able to effectively divide our tasks, communicate efficiently, and solve problems.

## What's next for TrashTalks  🚀

Through rigorous testing, our current model has achieved a remarkable 94% accuracy rating. We're aiming to further our efforts by refining the algorithms through more trainings and providing users with an option for giving feedback. Also, our project is currently limited to six types of garbage, but with continued development, we can provide more comprehensive waste management services.

## Reference

https://huggingface.co/yangy50/garbage-classification

https://rapidapi.com/fp89811/api/climate-change-live402/

https://www.kaggle.com/datasets/asdasdasasdas/garbage-classification
