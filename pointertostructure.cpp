#include<iostream>
#include<stdlib.h>
#include<stdio.h>
using namespace std;
struct rectangle
{
    int lenght;
    int breadth;
};
int main()
{
   
   rectangle *p;
   p=new rectangle;
   p->lenght=10;
   p->breadth=7;

   cout<< p->lenght<<endl;
   cout<< p->breadth<<endl;
   return 0;

}
