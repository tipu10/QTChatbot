import React from 'react'
import { Text, Reply } from '@botonic/react'
import Welcome from './actions/welcome'
import ChosenPizza from './actions/chosen-pizza'
import ChosenPasta from './actions/chosen-pasta'

export const routes = [
    // {
    //     path: 'welcome',
    //     text: /hi|hello|Hi|Hello/,
    //     action: Welcome,
    //     childRoutes: [
    //         {
    //             path: 'chosen-pizza',
    //             payload: 'pizza',
    //             action: ChosenPizza,
    //         },
    //         {
    //             path: 'chosen-pasta',
    //             payload: 'pasta',
    //             action: ChosenPasta,
    //         },
    //     ],
    // },
    {
        path: "",
        text: /hi|hello| Hi | Hello/,
        action: () => (
            <>
                <Text>Hi, Welcome to our customer service.</Text>
            </>
        ),

    },

    {
        path: "",
        text: /robot|bot| are you human/,
        action: () => (
            <>
                <Text>I am a robot, but I’m a good one. Let me prove it. How can I help you? ;)</Text>
            </>
        ),

    },
    {
        path: "",
        text: /how are you|How are you| What's up | what's up/,
        action: () => (
            <>
                <Text>I am fine, How are you? </Text>
            </>
        ),

    },
    {
        path: "",
        text: /Good morning|good morning/,
        action: () => (
            <>
                <Text>Good morning </Text>
            </>
        ),

    },
    {
        path: "",
        text: /Good night|good night/,
        action: () => (
            <>
                <Text>Good night </Text>
            </>
        ),

    },
    {
        path: "",
        text: /what is your name|name/,
        action: () => (
            <>
                <Text>My name is Bengal Tiger. How can I help you?</Text>
            </>
        ),

    },
    {
        path: "",
        text: /Tell me something|about you|about yourself/,
        action: () => (
            <>
                <Text>My name is Bengal Tiger, I am very young but I am learning very fast. I can do a bit of communication. How can I help you?</Text>
            </>
        ),

    },
    {
        path: "",
        text: /good|fine| ok/,
        action: () => (
            <>
                <Text>How can I help you?</Text>
            </>
        ),

    },
    {
        path: "",
        text: /Do you know a joke?|joke|jokes/,
        action: () => (
            <>
                <Text>I was going to tell you a joke about boxing but I forgot the punch line.</Text>
                <br />
                <Text>I used to run a dating service for chickens, but I was struggling to make hens meet.</Text>
            </>
        ),

    },
    {
        path: "",
        text: /Do you like people??|people/,
        action: () => (
            <>
                <Text>Yes, I love people</Text>

            </>
        ),

    },
    {
        path: "",
        text: /Do you have a hobby?|hobby/,
        action: () => (
            <>
                <Text>Yes, I love to talk with people</Text>

            </>
        ),

    },
    {
        path: "",
        text: /how old are you?/,
        action: () => (
            <>
                <Text>I am only 2 days old.</Text>

            </>
        ),

    },
    {
        path: "",
        text: /Which languages can you speak? | language | speak/,
        action: () => (
            <>
                <Text>English</Text>

            </>
        ),

    },
    {
        path: "",
        text: /Where do you live? |live/,
        action: () => (
            <>
                <Text>Chittagong, Bangladesh</Text>

            </>
        ),

    },

    {
        path: "",
        text: /Who is your maker? |maker |your boss/,
        action: () => (
            <>
                <Text>Quantanite</Text>

            </>
        ),

    },
    {
        path: "",
        text: /tell me about Quantanite? |Quantanite /,
        action: () => (
            <>
                <Text>Quantanite is a Customer Experience and Digital Outsourcing solutions provider for the world's fastest-growing companies. Visit:https://quantanite.com/ </Text>

            </>
        ),

    },
    {
        path: 'welcome',
        text: /food item |item list |item/,
        action: Welcome,
        childRoutes: [
            {
                path: 'chosen-pizza',
                payload: 'pizza',
                action: ChosenPizza,
            },
            {
                path: 'chosen-pasta',
                payload: 'pasta',
                action: ChosenPasta,
            },
        ],
    },
    {
        path: "",
        text: /services |service /,
        action: () => (
            <>
                <Text>SOftware Development</Text>
                <Text>Web Development</Text>
                <Text>App Development</Text>

            </>
        ),

    },

    {
        path: "",
        text: /Who is the president of USA ?/,
        action: () => (
            <>
                <Text>Joe Biden</Text>

            </>
        ),

    },

    {
        path: "",
        text: /what is the biggest country in the world?/,
        action: () => (
            <>
                <Text>Russia</Text>

            </>
        ),

    },

    {
        path: "",
        text: /which country is the richest in the world?/,
        action: () => (
            <>
                <Text>Luxembourg</Text>

            </>
        ),

    },

    {
        path: "",
        text: /What is the largest river in the world?/,
        action: () => (
            <>
                <Text>Nile</Text>

            </>
        ),

    },


    {
        path: "",
        text: /who is the best football player in the world ?/,
        action: () => (
            <>
                <Text>Lionel Messi</Text>


            </>
        ),

    },

    {
        path: "",
        text: /how old the planet earth ?/,
        action: () => (
            <>
                <Text>4.543 billion years</Text>

            </>
        ),

    },

    {
        path: "",
        text: /Which animal is known as the 'Ship of the Desert"? |Ship of the Desert/,
        action: () => (
            <>
                <Text>Camel</Text>

            </>
        ),

    },

    {
        path: "",
        text: /How many hours are there in a day?|hours/,
        action: () => (
            <>
                <Text>24 hours</Text>

            </>
        ),

    },

    {
        path: "",
        text: /How many sides are there in a triangle?|triangle/,
        action: () => (
            <>
                <Text>Three</Text>

            </>
        ),

    },



]