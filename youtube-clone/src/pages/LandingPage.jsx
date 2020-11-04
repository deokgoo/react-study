import React, {useEffect} from 'react';
import VideoList from '../components/video_list/video_list';
import Header from '../components/header/header';
import {useDispatch} from 'react-redux';
import {updateVideoPopularList} from '../redux/videoStore/action';

const LandingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(await updateVideoPopularList())
      } catch(err) {
        console.log('err', err);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="landingPage">
      <Header />
      <VideoList />
    </div>
  )
};

export default LandingPage;
