#include<iostream>
using namespace std;

class Array
{
private: 

   int *A;
   int size;
   int length;  
public:   
  Array()//non paramaterised constructor
  {
      size=10;
        A=new int[size];
       length=0; 

  }
  Array(int sz)//paramaterised constructor
  {
      size=sz;
      A=new int[sz];
      length=0;

  }
  ~Array()
  {
      delete [] A;
  }
  void Display();
  void insert(int index,int x);
  int Delete(int index);
  
};
void  Array:: Display()
{
    int i=0;
    for(i=0;i<length;i++)
    {
        cout<<A[i]<<" ";
      cout<<endl;  
    }
}
void  Array:: insert(int index,int x)
{
    int i;
    if(index>=0 && index<=length)
    {
        for(i=length-1;i>=index;i--)
        A[i+1]=A[i];
       A[index]=x;
       length++;

    }
}
int  Array:: Delete(int index)
{
    int x,i;
    if(index>=0 && index<length)
    {
        x=A[index];
        for(i=index;i<length-1;i++)
        {
            A[i]=A[i+1];
        }
        length--;
    }
    return x;


}
int main()
{
    Array arr(10);
    arr.insert(0,3);
    arr.insert(1,4);
    arr.insert(2,9);
    arr.Display();
    cout<<arr.Delete(0)<<endl;
    arr.Display();

    return 0;
}
