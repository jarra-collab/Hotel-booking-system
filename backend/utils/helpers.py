from datetime import datetime

def parse_date(date_str):
    return datetime.strptime(date_str, "%Y-%m-%d")


def calculate_nights(check_in, check_out):
    d1 = parse_date(check_in)
    d2 = parse_date(check_out)
    return (d2 - d1).days


def success(message, data=None):
    return {
        "status": "success",
        "message": message,
        "data": data
    }


def error(message):
    return {
        "status": "error",
        "message": message
    }