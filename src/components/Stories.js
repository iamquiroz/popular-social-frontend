import React from 'react'
import Story from './Story'
import styled from 'styled-components'



const Stories =() =>{
	return(
		<StoriesWrapper>
			<Story
			image="https://res.cloudinary.com/dhiu2qp7e/image/upload/v1639125035/images/photo-social/canela_my02ai.png"
			profileSrc="https://res.cloudinary.com/dhiu2qp7e/image/upload/v1639125133/images/photo-social/profiles/33_ihenzv.jpg"
			title="Ashton Smikle" 
			/>
			<Story
			image="https://res.cloudinary.com/dhiu2qp7e/image/upload/v1639008968/images/photo-social/istockphoto-1125859091-612x612_pa3tke.jpg"
			profileSrc="https://res.cloudinary.com/dhiu2qp7e/image/upload/v1639125427/images/photo-social/profiles/1_srnzlr.jpg"
			title="Brittney Jupiter"
			/>
			<Story
			image="https://res.cloudinary.com/dhiu2qp7e/image/upload/v1639125671/images/photo-social/0ufu1q21.js-ts_p8rmpi.jpg"
			profileSrc="https://res.cloudinary.com/dhiu2qp7e/image/upload/v1639125279/images/photo-social/profiles/94_rzys7f.jpg"
			title="Michael Burns"
			/>
			<Story
			image="https://res.cloudinary.com/dhiu2qp7e/image/upload/v1639125702/images/photo-social/virat-kohli-success-quote-1523888269_aqfa0s.jpg"
			profileSrc="https://res.cloudinary.com/dhiu2qp7e/image/upload/v1639125564/images/photo-social/profiles/58_wxgjtf.jpg"
			title="Kendall Bruderer"
			/>

		</StoriesWrapper>
	)
}


const StoriesWrapper = styled.div`
	display: flex;
`


export default Stories