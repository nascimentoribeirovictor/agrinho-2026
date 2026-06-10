*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body{
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
}

header{
    background: linear-gradient(135deg, #2e7d32, #66bb6a);
    color: white;
    text-align: center;
    padding: 60px 20px;
}

header h1{
    font-size: 3rem;
    margin-bottom: 10px;
}

header p{
    font-size: 1.2rem;
}

nav{
    background-color: #1b5e20;
    padding: 15px;
    text-align: center;
}

nav a{
    color: white;
    text-decoration: none;
    margin: 0 15px;
    font-weight: bold;
    transition: 0.3s;
}

nav a:hover{
    color: #c8e6c9;
}

section{
    max-width: 1100px;
    margin: 40px auto;
    padding: 20px;
}

section h2{
    margin-bottom: 15px;
    color: #2e7d32;
}

.card-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.card{
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.card:hover{
    transform: translateY(-5px);
}

.card h3{
    color: #2e7d32;
    margin-bottom: 10px;
}

button{
    background-color: #2e7d32;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    font-size: 1rem;
    transition: 0.3s;
}

button:hover{
    background-color: #1b5e20;
}

#mensagem{
    margin-top: 20px;
    font-size: 1.1rem;
    font-weight: bold;
    color: #2e7d32;
}

footer{
    background-color: #1b5e20;
    color: white;
    text-align: center;
    padding: 20px;
    margin-top: 40px;
}

@media (max-width: 768px){
    header h1{
        font-size: 2rem;
    }

    nav a{
        display: block;
        margin: 10px 0;
    }
}
