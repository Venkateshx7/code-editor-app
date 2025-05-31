<<<<<<< HEAD
from flask import Flask, request, jsonify
import sys
import io

app = Flask(__name__)

@app.route("/run", methods=["POST"])
def run_code():
    data = request.get_json()
    code = data.get("code", "")

    old_stdout = sys.stdout
    redirected_output = sys.stdout = io.StringIO()

    try:
        exec(code)
        output = redirected_output.getvalue()
    except Exception as e:
        output = str(e)
    finally:
        sys.stdout = old_stdout

    return jsonify({"output": output})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
=======
from flask import Flask, request, jsonify
import sys
import io

app = Flask(__name__)

@app.route("/run", methods=["POST"])
def run_code():
    data = request.get_json()
    code = data.get("code", "")

    old_stdout = sys.stdout
    redirected_output = sys.stdout = io.StringIO()

    try:
        exec(code)
        output = redirected_output.getvalue()
    except Exception as e:
        output = str(e)
    finally:
        sys.stdout = old_stdout

    return jsonify({"output": output})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
>>>>>>> 76afcd525f0ca080fb80f7e4913e9710407ce9e2
