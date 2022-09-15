#include <iostream>
using namespace std;
 
class Array{
 
private:
    int *A;
    int size;
    int length;
 
public:
    Array(int a){
        size = a;
        A = new int [size];
        
    }
 
    void create(){
        int i;
        cout << "Enter number of elements: " << flush;
        cin >> length;
        cout << "Enter the array elements: " << endl;
        for ( i = 0; i < length; i++){
        
            cin >> A[i];
            
        }
    



    }
 
    void display(){
        for (int i = 0; i < length; i++){
            cout << A[i] << " ";
        }
    }
    void append(int x)
    {
        if(length<size)
         A[length]=x;
        length++;


    }
    void insert(int index, int x)
    {
        int i;
        if(index>=0 && index<=length)
        
        for(i=length;i>index;i--)
        {
            A[i]=A[i-1];
        }
        A[index]=x;
        length++;
    }
    int Delete(int index)
    {
        
        int x=0;
        int i;
        if(index>=0 && index<length)
        
            x=A[index];
    
            for(i=index;i<length-1;i++)
            
                A[i]=A[i+1];
             length--;
             return x;   
            
        
    }
        

 
     
};

int main() {
 
 
    Array p(10);
    
   p.create();
      
   //  p.append(10);
    
    
   //  p.insert(3,10);
   cout<<"Deleted value"<<endl;
    cout<<p.Delete(4)<<endl;
    p.display();
    
 
 
    return 0;
}