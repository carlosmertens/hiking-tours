import Image from 'next/image';

export const Header = () => {
  return (
    <header className='header'>
      <div className='logo-box'>
        <Image
          className='logo'
          src='/logo-white.png'
          alt='Home logo'
          width={60}
          height={35}
        />
      </div>

      <div className='text-box'>
        <h1 className='heading-primary'>
          <span className='heading-primary-main'>Outdoors</span>
          <span className='heading-primary-sub'>is where life happens</span>
        </h1>

        <a className='btn btn-white btn-animated' href='#'>
          Discover our tours
        </a>
      </div>
    </header>
  );
};
