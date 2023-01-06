import Image from 'next/image';
import nat1 from '../public/nat-1-large.jpg';
import nat2 from '../public/nat-2-large.jpg';
import nat3 from '../public/nat-3-large.jpg';

export const About = () => {
  return (
    <section className='section-about'>
      <div className='u-center-text u-margin-botton-big'>
        <h2 className='heading-secondary'>
          Exciting tours for adventurous people
        </h2>
      </div>

      <div className='row'>
        <div className='col-1-of-2'>
          <h3 className='heading-tertiary u-margin-button-small'>
            You&apos;re going to fall in love with nature
          </h3>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iste
            aspernatur provident suscipit dicta obcaecati molestias veniam
            dolores ad voluptas expedita fugiat enim sapiente natus, ullam
            dolorum animi, accusantium doloremque!
          </p>

          <h3 className='heading-tertiary u-margin-button-small'>
            Live adventures like you never have before
          </h3>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            accusamus perspiciatis eligendi beatae nesciunt. Illo, eaque eius,
            qui esse laboriosam iste repudiandae, impedit ad beatae ea sit error
            ipsa. Dolores?
          </p>

          <a href='#' className='btn-text'>
            Learn more &rarr;
          </a>
        </div>
        <div className='col-1-of-2'>
          <div className='composition'>
            <Image
              src={nat1}
              alt='photo nature'
              className='composition__photo composition__photo--p1'
            />
            <Image
              src={nat2}
              alt='photo nature'
              className='composition__photo composition__photo--p2'
            />
            <Image
              src={nat3}
              alt='photo nature'
              className='composition__photo composition__photo--p3'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
