import json,sys
p=json.load(open('package.json'))
package='pdf'+'-stamp'
v=p.get('dependencies',{}).get(package)
print('Offline teaching advisory: fictional PDF library / CVE-2026-20452')
if v and tuple(map(int,v.split('.'))) < (2,3,4):
    print('FAIL: CVE-2026-20452; bump the PDF library to 2.3.4'); sys.exit(1)
print('PASS: dependency-scan')
