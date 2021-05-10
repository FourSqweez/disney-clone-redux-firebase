import styled from 'styled-components'

export default function Login() {
	return (
		<Container>
			<CTA>
				<CTALogoOne src="/images/cta-logo-one.svg" />
				<SignUp>Get All There</SignUp>
				<Description>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae commodi
					repellat suscipit, magni, dignissimos rerum incidunt aliquid natus
					quia veniam, eum nostrum architecto pariatur cum voluptas laboriosam
					ducimus magnam consequatur.
				</Description>
				<CTALogoTwo src="/images/cta-logo-two.png" />
			</CTA>
		</Container>
	)
}

const Container = styled.div`
	position: relative;
	height: calc(100vh - 70px);
	display: flex;
	align-items: top;
	justify-content: center;

	&:before {
		background-position: top;
		background-size: cover;
		background-repeat: no-repeat;
		background-image: url('/images/login-background.jpg');
		position: absolute;
		content: '';
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		opacity: 0.7;
		z-index: -1;
	}
`

const CTA = styled.div`
	max-width: 650px;
	padding: 80px 40px;
	width: 70%;
	display: flex;
	flex-direction: column;
	margin-top: 100px;
    align-items: center;
`

const CTALogoOne = styled.img``
const CTALogoTwo = styled.img`
    width: 90%;
`

const SignUp = styled.a`
	text-transform: uppercase;
	width: 100%;
	background-color: #0073e5;
	font-weight: bold;
	padding: 17px 0;
	color: #f9f9f9;
	border-radius: 4px;
	text-align: center;
	font-size: 18px;
	cursor: pointer;
	transition: all 250ms;
	letter-spacing: 1.5px;
	margin-top: 8px;
	margin-bottom: 12px;

	:hover {
		background: #0483ee;
	}
`
const Description = styled.p`
	font-size: 11px;
	letter-spacing: 1.5px;
	text-align: center;
	line-height: 1.5;
	margin-bottom: 12px;
`
