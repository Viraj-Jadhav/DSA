#include<stdio.h>
int f(int n)
{
  int i=0;
  static int s=0;
  for(i=1;i<=n;i++)
  s=s+i;
  return s;

}
int main()
{
  printf("%d",f(2));
}




