#include<iostream>
#include<stdio.h>
using namespace std;
struct rectangle
{
    int lenght;
    int breadth;
};
void initialize(struct rectangle *r,int l,int b)
{
  r->lenght=l;
  r->breadth=b;
}
int area(struct rectangle r)
{
    return r.lenght*r.breadth;
}
int perimeter(rectangle r)
{
    int p;
    p=2*(r.lenght+r.breadth);
    return p;
}
int main()
{
rectangle r={0,0};
int a,c;
cout<<"enter lenght and bradth"<<endl;
cin>>a>>c;
initialize(&r,a,c);
int p=area(r);
int peri=perimeter(r);
cout<<p<<endl<<peri<<endl;
return 0;
}

//object oriented approach

class rectangle
{
    public:
    int lenght;
    int breadth;

void initialize(int l,int b)
{
  lenght=l;
  breadth=b;
}
int area()
{
    return lenght*breadth;
}
int perimeter()
{
    int p;
    p=2*(lenght+breadth);
    return p;
}
};
int main()
{
rectangle r={0,0};
int a,c;
cout<<"enter lenght and bradth"<<endl;
cin>>a>>c;
r.initialize(a,c);
int p=r.area();
int peri=r.perimeter();
cout<<p<<endl<<peri<<endl;
return 0;
}









