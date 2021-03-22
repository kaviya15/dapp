import os,itertools
id = itertools.count(start=1)
import json
class Create:
    def __init__(self,id,name,voter,aadhar,image):
        self.id = id
        self.name = name
        self.voter = voter
        self.aadhar = aadhar
        self.image = image
    def create_dict(self):
        return ({
                 "id":self.id,
                 "name":self.name,
                 "voter":self.voter,
                 "adh":self.aadhar,
                 "image":self.image
            })
base_dir = os.path.dirname(os.path.abspath(__file__))
image_dir = os.path.join(base_dir,'images')
v_id_counting = itertools.count(start=9874563210)
a_id_couting = itertools.count(start=987456321011)
arr =[Create(next(id),name.split('.')[0], next(v_id_counting), next(a_id_couting),'images/'+name).create_dict() for _,_,names in os.walk(image_dir) for name in names]

# for i in range(0,len(name_list)):
#     name_list[i] = Create(name_list[i], 9632581400+i, 987654321900+i)
#     arr.append(name_list[i].create_dict())
# print(arr)

# obj1 = Create("kaviya",9632581470,987654321987)
# obj2 = Create("ramya",7412583690,987654321981)
# obj3 = Create("jenisha",8523691470,987654321982)
# obj4= Create("Dimple",8523691471,987654321983)
# obj5 = Create("Nina",8523691472,987654321984)
# obj6 = Create("Bonnie",8523691473,987654321983)
# obj7 = Create("caroline",8523691470,987654321982)
# obj8 = Create("katherine",8523691475,987654321985)
#
# arr = [obj1.create_dict(),
#        obj2.create_dict(),
#        obj3.create_dict(),obj4.create_dict(),
#        obj5.create_dict(),obj6.create_dict(),
#        obj7.create_dict(),obj8.create_dict()]
print(arr)
