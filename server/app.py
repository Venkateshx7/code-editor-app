from flask import Flask, send_from_directory

# Create Flask app, tell it where React build files live
app = Flask(__name__, static_folder='client/build', static_url_path='')

# Route for React app root URL
@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

# Route to serve React static files (JS, CSS, images, etc.)
@app.route('/<path:path>')
def static_files(path):
    return send_from_directory(app.static_folder, path)

# Example API route (optional)
@app.route('/api/hello')
def hello():
    return {'message': 'Hello from Flask!'}

if __name__ == '__main__':
    # Listen on all network interfaces, port 5000 (or use env var)
    app.run(host='0.0.0.0', port=5000)
