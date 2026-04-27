import shutil
import os
os.makedirs('cypress/fixtures', exist_ok=True)
src = 'cypress/fixtures/test-image.png'
for dst in ['cypress/fixtures/test-image.jpg', 'cypress/fixtures/test-image.jpeg']:
    shutil.copyfile(src, dst)
    print(f'created {dst}')
