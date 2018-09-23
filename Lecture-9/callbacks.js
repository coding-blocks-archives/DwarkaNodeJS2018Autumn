/**
 * Created by aayusharora on 7/4/18.
 */


function ImageProcessing() {

       getImage(function(image){
       enhanceImage(image, function(enhImage){
           console.log("Enhancing Image");
           console.log("Optimization is started....");
           console.log("Enhanced Image is "+ enhImage);
           OptimizeImage(enhImage, function(img){
               console.log(img);

           });
       });
       console.log('Image Enhancing started');
    })

   console.log('Image Processing started');
}

function getImage(cb) {

  setTimeout(function(){
      console.log("Getting the Image");
      let img = 'abc.jpeg';
      cb(img);
  },0)

}

function enhanceImage(img, cb) {
    setTimeout(function(){
       console.log(" I can enhance this image " + img)
       let image = img + " enhanced";
       cb(image);
    },0)
   
}

function OptimizeImage(enhImage, cb) {
    setTimeout(function(){
        console.log("Optimizing Image");
        let optimisedImage = enhImage + " Optimised";
        cb(optimisedImage);
    },0)

}
ImageProcessing();