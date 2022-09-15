#include<iostream>
#include<stdio.h>
#include<stdlib.h>
using namespace std;
//THIS IS CALL BY VALUE PROGRAM
struct rectangle     //THIS IS CALL BY VALUE PROGRAM
{
    int lenght;
    int breadth;
};
void fun(struct rectangle r1)
{
    r1.lenght=20;
    cout<<r1.lenght<<endl;
    cout<<r1.breadth<<endl;
}
int main()
{
    struct rectangle r={10,5};
    fun(r);
    cout<<r.lenght<<endl;
    cout<<r.breadth<<endl;

}

// Call by address
struct rectangle    
{
    int lenght;
    int breadth;
};
void fun(struct rectangle *r1)
{
    r1->lenght=20;
    cout<<r1->lenght<<endl;
    cout<<r1->breadth<<endl;
}
int main()
{
    struct rectangle r={10,5};
    fun(&r);
    cout<<r.lenght<<endl;
    cout<<r.breadth<<endl;

}

//RETURNING A POINTER TO A STRUCTURE
struct rectangle    
{
    int lenght;
    int breadth;
};
struct rectangle *fun()
{
    struct rectangle *p;
    p=new rectangle;
    p->lenght=15;
    p->breadth=20;
    return p;
}
int main()
{
    struct rectangle *ptr=fun();
    cout<<ptr->lenght<<endl;
    cout<<ptr->breadth<<endl;
    return 0;

}