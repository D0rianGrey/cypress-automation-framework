from selenium import webdriver

driver = webdriver.Chrome()
driver.get("http://www.google.com")

elem = driver.find_element_by_name("q")
elem.send_keys("Hello WebDriver!")
elem.submit()

print(driver.title)
driver.close()

