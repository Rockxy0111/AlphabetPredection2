import * as React from 'react';
import { Button,StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

export default class PickImage extends React.Component {
state={
image:null,
}
 render(){
 let {image} = this.state

 
  return(
    <View style = {{flex: 1,alignItems: 'center',justifyContent: 'center',}}>
   <Button
   title="Pick an Image Roll"
   onPress={this.uploadImage}
   />
    </View>
  )
    
  }
}
  
getPermissionAsync = async () => {
  if (Platform.OS !== "web") {
  const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  if (status !== "granted") {
    alert("Sorry, we need camera roll permissions to make this work!");
    }
  }
};

 componentDidMount=()=> {
  this.getPermissionAsync();
 }   



uploadImage = async (uri) => {
  const data = new FormData();
  let filename = uri.split("/")[uri.split("/").length - 1]
  let type = `image/${uri.split(':')[uri.split(':').length - 1]}`
  const fileToUpload = {
  uri: uri,
  name: filename,
  type: type,
  };
  data.append("alphabet", fileToUpload);
  fetch("https://f292a3137990.ngrok.io/predict-alphabet", {
  method: "POST",
  body: data,
  headers: {
   "content-type": "multipart/form-data",
  },
    })
    .then((response) => response.json () )
    .then((result) => {
      console.log("Success:", result);
    })
    .catch((error) => {
    console.error("Error:", error);
    });
};
      

  
