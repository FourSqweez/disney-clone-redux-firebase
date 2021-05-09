import styled from 'styled-components'

export default function Movies() {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
          <img
            src="https://idsb.tmgrup.com.tr/ly/uploads/images/2020/06/29/43538.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://www.catdumb.tv/wp-content/uploads/2020/06/the-simpsons-takeover-800-by-450.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://img.online-station.net/_content/2017/1215/gallery/1513326546.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://thestandard.co/wp-content/uploads/2020/06/POP_UPDATE_The-Simpsons-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%A2%E0%B8%81%E0%B9%80%E0%B8%A5%E0%B8%B4%E0%B8%813.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://idsb.tmgrup.com.tr/ly/uploads/images/2020/06/29/43538.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://www.catdumb.tv/wp-content/uploads/2020/06/the-simpsons-takeover-800-by-450.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://img.online-station.net/_content/2017/1215/gallery/1513326546.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://thestandard.co/wp-content/uploads/2020/06/POP_UPDATE_The-Simpsons-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%A2%E0%B8%81%E0%B9%80%E0%B8%A5%E0%B8%B4%E0%B8%813.jpg"
            alt=""
          />
        </Wrap>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 20px;
`

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  :hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
  }
`
