import React from 'react'
import Story from './Story'
import styled from 'styled-components'



const Stories =() =>{
	return(
		<StoriesWrapper>
			<Story
			image="https://res.cloudinary.com/dhiu2qp7e/image/upload/v1639125035/images/photo-social/canela_my02ai.png"
			profileSrc="https://res.cloudinary.com/dhiu2qp7e/image/upload/v1639125133/images/photo-social/profiles/33_ihenzv.jpg"
			title="Ashton Smikle - Chief Financial Officer"
			/>
			<Story
			image="https://res.cloudinary.com/dhiu2qp7e/image/upload/v1639125671/images/photo-social/0ufu1q21.js-ts_p8rmpi.jpg"
			profileSrc="https://res.cloudinary.com/dhiu2qp7e/image/upload/v1639125427/images/photo-social/profiles/1_srnzlr.jpg"
			title="Brittney Jupiter - Programmer"
			/>
			<Story
			image="https://res.cloudinary.com/dhiu2qp7e/image/upload/v1639125671/images/photo-social/0ufu1q21.js-ts_p8rmpi.jpg"
			profileSrc="https://res.cloudinary.com/dhiu2qp7e/image/upload/v1639125279/images/photo-social/profiles/94_rzys7f.jpg"
			title="Michael Burns - Chief Executive"
			/>
			<Story
			image="https://res.cloudinary.com/dhiu2qp7e/image/upload/v1639125702/images/photo-social/virat-kohli-success-quote-1523888269_aqfa0s.jpg"
			profileSrc="https://res.cloudinary.com/dhiu2qp7e/image/upload/v1639125564/images/photo-social/profiles/58_wxgjtf.jpg"
			title="kendall Bruderer - Chief Executive Officer"
			/>

		</StoriesWrapper>
	)
}


const StoriesWrapper = styled.div`
	direction:flex;
`


export default Stories