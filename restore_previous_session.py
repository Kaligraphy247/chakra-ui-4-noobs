"""Quickly restore incognito browsing session, without the cookies, of course."""

import os

chrome_path = r"C:\Program Files\Google\Chrome\Application"
os.chdir(chrome_path)
restore_sites = [
    "http://localhost:5173",
    "https://duckduckgo.com",
    "https://chakra-ui.com/docs/components",
    "https://chakra-ui.com/docs/components/popover",
    "https://github.com/estheragbaje/chakra-ui-for-beginners/blob/14/building-the-pricing-right/src/components/Pricing.tsx",
]

print("Restoring previous session...\n")
for index, site in enumerate(restore_sites, 1):
    print(f'{index}. Restoring "{site}"...')
    os.system(f"chrome.exe --incognito {site}")

print(
    f"\nRestored {len(restore_sites)} {'site' if len(restore_sites) == 1 else 'sites'} from previous session.\nDone."
)
