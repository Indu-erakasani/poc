
# from flask import Flask, request, jsonify
# import smtplib
# from email.mime.text import MIMEText
# from email.mime.multipart import MIMEMultipart

# # SMTP Email Configuration
# SMTP_SERVER = "smtp.elasticemail.com"
# SMTP_PORT = 2525
# SMTP_USERNAME = "indu18002@gmail.com"
# SMTP_PASSWORD = "7A85D06AFEBB013BBFF1F6AD147F2F8E908B"

# app = Flask(__name__)

# def send_email_to_candidate(recipient_email):
#     try:
#         smtp_server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
#         smtp_server.starttls()
#         smtp_server.login(SMTP_USERNAME, SMTP_PASSWORD)

#         subject = 'Congratulations!'
#         instructions = (
#             'Dear Candidate,\n\n'
#             'Congratulations! You have been selected to participate in the written test '
#             'as part of our recruitment process.\n\n'
#             'Instructions:\n'
#             '1. Test Duration: 60 minutes\n'
#             '2. Click on the link below to access the test.\n'
#             '   [Test Link Here]\n'
#             '3. Answer all questions within the given time.\n'
#             '4. Submit your answers before the deadline.\n\n'
#             'Best of luck!\n'
#             'Zentree labs Pvt ltd.'
#         )
#         message = MIMEMultipart()
#         message['From'] = SMTP_USERNAME
#         message['To'] = recipient_email
#         message['Subject'] = subject
#         message.attach(MIMEText(instructions))

#         smtp_server.sendmail(SMTP_USERNAME, recipient_email, message.as_string())

#         smtp_server.quit()
#         print(f"Email sent successfully to {recipient_email}")
#     except Exception as e:
#         print(f"Error sending email:", e)

# @app.route('/SendEmail', methods=['POST'])
# def receive_email():
#     data = request.get_json()
#     recipient_email = data.get("email")

#     if recipient_email:
#         send_email_to_candidate(recipient_email)
#         return jsonify({'message': f'Email sent to {recipient_email} successfully'})
#     else:
#         return jsonify({'error': 'Email not provided'}), 400

# if __name__ == '__main__':
#     app.run(port=5003)




from flask import Flask, request, jsonify, render_template,send_file
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# SMTP Email Configuration
SMTP_SERVER = "smtp.elasticemail.com"
SMTP_PORT = 2525
SMTP_USERNAME = "indu18002@gmail.com"
SMTP_PASSWORD = "7A85D06AFEBB013BBFF1F6AD147F2F8E908B"

app = Flask(__name__)


# def generate_test_link(candidate_email):
#     base_url = "http://localhost:3000"
#     candidate_form_path = "/CandidateForm.js"
#     link = f"{base_url}{candidate_form_path}?email={candidate_email}"
#     return link

# def generate_test_link(candidate_email):
#     local_ip = "10.10.2.152"  # Replace with your actual IP address
#     candidate_form_path = "/CandidateForm.js"
#     link = f"http://{local_ip}:5003{candidate_form_path}?email={candidate_email}"
#     return link

def generate_test_link(candidate_email):
    local_ip = "10.10.3.107"  # Replace with your actual IP address
    candidate_form_path = "/home/indhu/Documents/RESOURCING-BOT/RESOURCING-BOT/resumescreeing_engine/resumescreeing_engine/src/Frontend/CandidateForm.js"
    # link = f"http://{local_ip}:5003{candidate_form_path}?email={candidate_email}"
    link = f"http://{local_ip}:5003{candidate_form_path}"
    return link


def send_email_to_candidate(recipient_email):
    try:
        smtp_server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        smtp_server.starttls()
        smtp_server.login(SMTP_USERNAME, SMTP_PASSWORD)

        subject = 'Congratulations!'
        instructions = (
            'Dear Candidate,\n\n'
            'Congratulations! You have been selected to participate in the written test '
            'as part of our recruitment process.\n\n'
            'Instructions:\n'
            f'1. Test Duration: 10 minutes\n'
            f'2. Click on the link below to access the test.\n'
            f'   {generate_test_link(recipient_email)}\n'
            '3. Answer all questions within the given time.\n'
            '4. Submit your answers before the deadline.\n\n'
            'Best of luck!\n'
            'Zentree labs Pvt ltd.'
        )
        message = MIMEMultipart()
        message['From'] = SMTP_USERNAME
        message['To'] = recipient_email
        message['Subject'] = subject
        message.attach(MIMEText(instructions))

        smtp_server.sendmail(SMTP_USERNAME, recipient_email, message.as_string())

        smtp_server.quit()
        print(f"Email sent successfully to {recipient_email}")
        print(generate_test_link)
    except Exception as e:
        print(f"Error sending email:", e)


@app.route('/CandidateForm.js', methods=['GET'])
def candidate_form_js():
    # Replace '/path/to/CandidateForm.js' with the actual path to your JavaScript file
    return send_file('/home/indhu/Documents/RESOURCING-BOT/RESOURCING-BOT/resumescreeing_engine/resumescreeing_engine/src/Frontend/CandidateForm.js', mimetype='text/javascript')

@app.route('/SendEmail', methods=['POST'])
def receive_email():
    data = request.get_json()
    recipient_email = data.get("email")

    if recipient_email:
        send_email_to_candidate(recipient_email)
        return jsonify({'message': f'Email sent to {recipient_email} successfully'})
    else:
        return jsonify({'error': 'Email not provided'}), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5003)

