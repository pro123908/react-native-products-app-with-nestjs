import ImagePicker from 'react-native-image-picker';

export const OpenImagePicker = (setImage, setCloudData) => {
  const options = {
    title: 'Select Avatar',
    customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);
    let source = '';

    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      source = {uri: response.uri};
      setImage(source);
      setCloudData({
        file: 'data:image/jpeg;base64,' + response.data,
        upload_preset: 'l1v1qrc0',
      });
    }
  });
};
