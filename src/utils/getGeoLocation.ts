

export const getGeoLocations = () => {  
  return new Promise((resolve, reject) => {
    const locationHandle = (position: Position) => {      
      resolve({ 
        lng: position.coords.longitude,
        lat: position.coords.latitude,
      })
    }
    const errorHandle = (err: PositionError) => reject(err.message);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(locationHandle, errorHandle);
    } else {
      reject('Geolocation is not supported by this browser')
    }
  })
  
}