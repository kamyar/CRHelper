
import json

from logging.handlers import TimedRotatingFileHandler

from subprocess import call, check_output

app_name = "Clash Royale Helper"
prod_branches = ["master"]


current_branch = check_output(["git", "rev-parse", "--abbrev-ref", "HEAD"]).strip()
current_hash = check_output(["git", "rev-parse", "--verify", "HEAD"]).strip()


is_debug = True
if current_branch in prod_branches:
    is_debug = False

with open('static/cardinfo.json') as data_file:
    cards_info = json.load(data_file)




print("Branch:\t", current_branch)
print("Debug Status:\t", is_debug)

