#include<iostream>>
using namespace std;
class Rectangle
{
    private:
    int lenght;
    int breadth;
    public:
    Rectangle()
    {
    lenght=0;
    breadth=0;
    }
    Rectangle(int l,int b)
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
        return 2*(lenght+breadth);
    }
    void setlenght(int l)
    {
        lenght=l;
    }
    void setbreadth(int b)
    {
        breadth=b;
    }
    int getlenght(int l)
    {
        return lenght;
    }
     int getbreadth(int b)
    {
        return breadth;
    }
    ~Rectangle()
    {
        cout<<"Destrctor";
    }
};
int main()
{
    Rectangle r(10,5);
    cout<<r.area()<<endl;
    cout<<r.perimeter()<<endl;
    return 0;

    
}