getCSS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('get','/1.css')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
            const style = document.createElement('style')
            style.innerHTML = request.response
            document.head.appendChild(style)
        }
    }
    request.send()
}

getJS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('get','/2.js')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
            const script = document.createElement('script')
            script.innerHTML = request.response
            document.head.appendChild(script)
        }
    }
    request.send()
}

getHTML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('get','/3.html')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
            const div = document.createElement('div')
            div.innerHTML = request.response
            document.body.appendChild(div)
        }
    }
    request.send()
}

getXML.onclick =()=>{
    const request = new XMLHttpRequest()
    request.open('get','/4.xml')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
            const dom = request.responseXML
            const text = dom.getElementsByTagName('poem')[0].textContent
            console.log(text.trim())
        }
    }
    request.send()
}

getJSON.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/5.json')
    request.onreadystatechange=()=>{
        if(request.readyState===4 && request.status===200){
            const object = JSON.parse(request.response)
            myName.textContent = object.name
        }
    }
    request.send()
}

let n = 1
getPage.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('get',`/page${n+1}`)
    request.onreadystatechange=()=>{
        if(request.readyState===4 && request.status===200){
            const array = JSON.parse(request.response)
            array.forEach(item=>{
                const li =document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li)
            })
            n+=1
        }
    }
    request.send()
}