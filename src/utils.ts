export function getCurrentTime() {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes: number | string = currentTime.getMinutes();
    let amOrPm = hours >= 12 ? 'PM' : 'AM';
  
    hours = hours % 12;
    hours = hours ? hours : 12; 
  
 
    minutes = minutes < 10 ? '0' + minutes : minutes;
  

    const time = hours + ':' + minutes + ' ' + amOrPm;
  
    return time;
  }