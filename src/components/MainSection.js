import React from 'react';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import InfoIcon from '@mui/icons-material/Info';
import '../css/MainSection.css';

function MainSection() {
  return (
    <div className='mainSection'>
      <div className='mainSection__left'>
        <div className='mainSection__row'>
          <div className='mainSection__connection'>New Connection</div>
          <div className='mainSection__favorite'>
            <StarOutlineIcon />
            Favorite
          </div>
        </div>
        <div className='mainSection__text'>
          Fill in connection fields individually
        </div>
        <div className='mainSection__leftBox'>
          <div className='mainSection__string'>
            Paste your connection string (SRV or Standard <InfoIcon />)
          </div>
          <div className='mainSection__form'>
            <form>
              <input
                type='text'
                placeholder='e.g. mongodb+srv://username:password@cluster0-jtpxd.mongodb.net/admin'
              />
              <div className='mainSection__formButton'>
                <button type='submit'>Connect</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='mainSection__right'>
        <div className='mainSection__rightBox mainSection__buttonBox'>
          <div className='mainSection__header'>
            New to Compass and don't have a cluster?
          </div>
          If you don't already have a cluster, you can create one for free using
          <a
            href='https://www.mongodb.com/atlas/database'
            target='_blank'
            rel='noreferrer'
            className='mainSection__span'
          >
            MongoDB Atlas.
          </a>
          <div className='mainSection__button'>
            <button type='submit'>CREATE FREE CLUSTER</button>
          </div>
        </div>
        <div className='mainSection__rightBox'>
          <div className='mainSection__header'>
            How do I find my connection string in Atlas?
          </div>
          If you have an Atlas cluster, go to the Cluster view. Click the
          'Connect' button for the cluster to which you wish to connect.
          <a
            href='https://docs.atlas.mongodb.com/compass-connection/'
            target='_blank'
            rel='noreferrer'
            className='mainSection__ex'
          >
            See example
          </a>
        </div>
        <div className='mainSection__rightBox'>
          <div className='mainSection__header'>
            How do I format my connection string?
          </div>
          <a
            href='https://docs.mongodb.com/manual/reference/connection-string/'
            target='_blank'
            rel='noreferrer'
            className='mainSection__ex'
          >
            See example
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
