 
#include<iostream>
#include<stdio.h>

using namespace std;



int sum(int n)
{
 if(n==0)
 return 0;
 else
 return sum(n-1)+n;
}
int Isum(int n)
{
 int s=0,i;
 for(i=1;i<=n;i++)
 s=s+i;

 return s;
}
int main()
{
 int r,p;
 cout<<"Enter number"<<endl;
 cin>>r;
 p=sum( r);
 cout<<p<<endl;


 
 
}