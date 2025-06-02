/* styles.css */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
}

body {
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

header {
    text-align: center;
    margin-bottom: 40px;
}

header h1 {
    font-size: 2.5rem;
    color: #2c3e50;
}

.years-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
}

.year-card {
    background: linear-gradient(135deg, #6e8efb, #a777e3);
    color: white;
    border-radius: 10px;
    padding: 30px;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.year-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.year-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    z-index: 1;
}

.year-content {
    position: relative;
    z-index: 2;
    text-align: center;
}

.year-card h2 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.streams-container {
    display: none;
    opacity: 0;
    transition: opacity 0.5s ease;
}

.streams-container.active {
    display: block;
    opacity: 1;
}

.back-button {
    background: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 20px;
    transition: background 0.3s ease;
}

.back-button:hover {
    background: #2980b9;
}

.year-title {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #2c3e50;
}

.streams-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
}

.stream-card {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.stream-card:hover {
    transform: translateY(-5px);
}

.stream-thumbnail {
    width: 100%;
    height: 180px;
    object-fit: cover;
}

.stream-info {
    padding: 15px;
}

.stream-date {
    color: #7f8c8d;
    font-size: 0.9rem;
    margin-bottom: 5px;
}

.stream-title {
    font-size: 1.1rem;
    margin-bottom: 10px;
    color: #2c3e50;
}

.stream-duration {
    color: #7f8c8d;
    font-size: 0.9rem;
}