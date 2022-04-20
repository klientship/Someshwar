const url = 'https://admin.yamunaashacity.com'
// const url = 'http://127.0.0.1:8000'

export const getHomepageSettings = async()=>{
    const response = await fetch(`${url}/api/homepage-settings`)
    const data = await response.json();
    return data
}
export const getVillas = async()=>{
    const response = await fetch(`${url}/api/villas`)
    const data = await response.json();
    return data
}
export const getSingleVilla = async(id)=>{
    const response = await fetch(`${url}/api/villas/${id}`)
    const data = await response.json();
    return data.data
}

export const getGalleryImages = async()=>{
    const response = await fetch(`${url}/api/images`)
    const data = await response.json();
    return data.data
}

export const getBanks = async()=>{
    const response = await fetch(`${url}/api/images`)
    const data = await response.json();
    return data.data
}
export const sendBrochureRequest = async(name,email,phone)=>{
    const response = await fetch(`${url}/api/brochure-requests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'name' : name,
            'email' : email,
            'phone' : phone,
        }),
      });
    const data = await response.json();
    return data
}



