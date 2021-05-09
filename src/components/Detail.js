import styled from 'styled-components'

export default function Detail() {
	return (
		<Container>
			<Background>
				<img
					src="https://images4.alphacoders.com/682/thumb-1920-682321.jpg"
					alt=""
				/>
			</Background>

			<ImageTitle>
				<img
					src="https://i.pinimg.com/originals/31/2c/8a/312c8a698601f2bf1a8938ebca850496.png"
					alt=""
				/>
			</ImageTitle>

			<Controls>
				<PlayButton>
					<img src="/images/play-icon-black.png" alt="" />
					<span>PLAY</span>
				</PlayButton>

				<TrailerButton>
					<img src="/images/play-icon-white.png" alt="" />
					<span>Trailer</span>
				</TrailerButton>

				<AddButton>
					<span>+</span>
				</AddButton>
				<GroupWatchButton>
					<img src="/images/group-icon.png" alt="" />
				</GroupWatchButton>
			</Controls>
			<SubTitle>2018 · 7m · Romance, Fantasy, Action, Animation</SubTitle>
			<Description>
				Shido Itsuka, a seemingly ordinary high school boy comes across a
				mysterious girl at the ground zero of a spacequake and learns from his
				sister Kotori she is one of the "Spirits" who are the real cause of the
				spacequakes that occur when they manifest themselves in the world.
			</Description>
		</Container>
	)
}

const Container = styled.div`
	min-height: calc(100vh - 70px);
	padding: 0 calc(3.5vw + 5px);
	position: relative;
`

const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: -1;
	opacity: 0.8;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

const ImageTitle = styled.div`
	height: 30vh;
	width: 35vw;
	min-height: 170px;
	min-width: 200px;

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`

const Controls = styled.div`
	display: flex;
	align-items: center;
`

const PlayButton = styled.button`
	border-radius: 4px;
	font-size: 15px;
	padding: 0px 24px;
	margin-right: 22px;
	display: flex;
	align-items: center;
	height: 56px;
	background: rgb(249, 249, 249, 0.5);
	border: none;
	letter-spacing: 1.8px;
	cursor: pointer;

	:hover {
		background: rgb(198, 198, 198);
	}
`

const TrailerButton = styled(PlayButton)`
	background: rgba(0, 0, 0, 0.5);
	border: 1px solid rgb(249, 249, 249);
	color: rgb(249, 249, 249);
	text-transform: uppercase;
`

const AddButton = styled.button`
	width: 44px;
	height: 44px;
	margin-right: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	border: 2px solid white;
	background-color: rgba(0, 0, 0, 0.5);
	cursor: pointer;

	span {
		font-size: 30px;
		color: white;
	}
`

const GroupWatchButton = styled(AddButton)`
	background: rgb(0, 0, 0);
`
const SubTitle = styled.h4`
	color: rgb(249, 249, 249);
	font-size: 15px;
	min-height: 20px;
	margin-top: 26px;
`

const Description = styled.div`
	line-height: 1.4;
	font-size: 20px;
	margin-top: 16px;
	color: rgb(249, 249, 249);
	background: rgb(0, 0, 0, 0.3);
`
