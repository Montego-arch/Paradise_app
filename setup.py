from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in paradise_app/__init__.py
from paradise_app import __version__ as version

setup(
	name="paradise_app",
	version=version,
	description="It is a demo app",
	author="Montego-Arch",
	author_email="okekeemmanuelomolola@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
