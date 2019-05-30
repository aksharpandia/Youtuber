# Youtuber

What does Youtuber do?

This is a tool that aims to streamline a business strategy inefficiency at In-Video Impressions (IVI). IVI is a startup that does thorough analyses on YouTube videos to provide insights of value to brands that advertise on YouTube. For example, IVI will analyze videos from cooking channels that it has a partnership with, and then it will sell those insights to cooking brands that can in turn advertise more cheaply and effectively on YouTube. IVI therefore derives value from being able to partner with and analyze as many YouTube channels as possible and cover as many affinities as possible to appeal to the broadest range of brands possible. The purpose of this tool is to identify the top – based on engagement and popularity -- channels IVI should partner with to provide the most value to brands. Although the tool was created with the intent of benefitting IVI, anyone interested in using this for personal or business use may do so. Therefore, the target user is any business strategist or YouTube follower who is looking for the best channels for any particular affinity. 

The complete webapp is is under development, but included in this file  we have a MVP webapp for internal use. The webapp contains a basic Vue frontend and a backend REST API in Flask. The API has full CRUD functionality.

How does Youtuber work?

Youtuber utilizes the YouTube Data API to retrieve the top search results for the keyword input. For example, if the user is looking for the top 'cooking' channels, the tool will find the top YouTube search results for 'cooking'. Then, it will use the API to retrieve statistics about each of the channels whose videos are in the top search results and do a thorough analysis on these channels to rank them. It should be noted that the ranking is not only based on the popularity of the channel but also for how the channel engages the audience. This choice was made to reward smaller channels that have dedicated viewers.

How to use?

To begin, fork the repo. You will then need to launch both the client and server side. If you do not already have Flask, do the following:

$ pip install Flask==1.0.2 Flask-Cors==3.0.7

Next, open command prompt, and cd into 'server'. In 'server', run the following:

$ set FLASK_APP=app.py 

$ flask run

To launch client-side: 

$ cd client

$ npm run dev

Navigate to http://localhost:8080/#/. Here you can find the top channels by clicking on the 'Add Keyword' button and entering the affinity for which you want the top channels and the number of search results you want to iterate through (higher == more channels analyzed). Run the search. 

The search will rank the channels and store them in an external Airtable database. Look for your entry in the first table. On the second table, you will find all the channels and corresponding statistics for each channel that were used to rank the channels. 


