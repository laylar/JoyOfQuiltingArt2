export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Gallery</h2>
          <p>
            Here are a few of the amazing things I've made.
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a href='https://www.etsy.com/ca/listing/878510361/sunflower-wall-hanging'>
                    <div className='hover-text'>
                      <h3>Sunflower Wall Hanging</h3>
                      <h4>Inspired by summer and the beautiful sunflowers, this piece was born from simple cotton material and free motion quilted into life. Colorful metallic paint gives it a life that will light up the room and catch the eye of passerby's. The wooden print binding adds that final touch.</h4>
                    </div>
                    <img
                      src='img/portfolio/sunflower-wall-hanging-small.jpg'
                      className='img-responsive'
                      alt='Sunflower Wall Hanging'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a href='https://www.etsy.com/ca/listing/865668346/flying-golden-geese'>
                    <div className='hover-text'>
                      <h3>Flying Golden Geese</h3>
                      <h4>Flying golden geese leading the way through a fog. Quilted to give multiple dimensional appearance, with gold metallic fabrics that pop.</h4>
                    </div>
                    <img
                      src='img/portfolio/flying-golden-geese-small.jpg'
                      className='img-responsive'
                      alt='Flying Golden Geese quilt'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a href='https://www.etsy.com/ca/listing/877511544/foxy-batik-blanket'>
                    <div className='hover-text'>
                      <h3>Foxy Batik Blanket</h3>
                      <h4>A foxy lap quilt with a unique patchwork and quilting design. Surely a one of a kind. It's made with a batik jelly roll, so expect some shrinkage when washed. Backing pieced together using historical technic to minimize waste and maximize character. Recommended washing: cool, gentle wash.</h4>
                    </div>
                    <img
                      src='img/portfolio/foxy-batik-blanket-small.jpg'
                      className='img-responsive'
                      alt='Foxy Batiky Blanket'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a href='https://www.etsy.com/ca/listing/787073995/funky-flying-cats-textile-wall-art'>
                    <div className='hover-text'>
                      <h3>Funky Flying Cats Textile Wall Art</h3>
                      <h4>One of a kind, funky flying cats fussy cut and accentuated with colorful frames. Frames were chosen to add to the character of each cat and to bring out their individuality. With each step along the way, attention to detail and emphasis was placed on these funky cats.</h4>
                    </div>
                    <img
                      src='img/portfolio/funky-flying-cats-small.jpg'
                      className='img-responsive'
                      alt='Funky flying cats textile wall art'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/03-large.jpg'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Lorem Ipsum</h4>
                    </div>
                    <img
                      src='img/portfolio/03-small.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/03-large.jpg'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Lorem Ipsum</h4>
                    </div>
                    <img
                      src='img/portfolio/03-small.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            

          </div>
        </div>
      </div>
    </div>
  )
}
