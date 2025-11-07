#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    float Power_Load, System_VoltAC, System_FreqAC; 
    cout<<"Power required by the user in kW (AC Load): "<< endl;
    cin>>Power_Load;
    
    cout<<"User AC supply frequency in Hz: "<<endl;
    cin>>System_FreqAC;
    
    float Vidc, Vac, Ma, Vmpp= 50.6, SV, SP, Pmpp=0.3, AP;
    cout<<"Enter the AC voltage supply: "<<endl;
    cin>>Vac;
    cout<<"Enter the Modulation index of the inverter: "<<endl;
    cin>>Ma;
    Vidc = 1/Ma * sqrt(2) * Vac;
    cout<<"Input dc voltage (Vidc) = "<<Vidc<<"volts"<<endl;
    
    int NM,NS;
    NM = round(Vidc/Vmpp);
    cout<<"Number of modules(NM): "<<NM<<endl;
    
    SV = NM*Vmpp;
    cout<<"The string voltage(SV) is: "<<SV<<" volts"<<endl;
    SP = NM * Pmpp;
    cout<<"The string power(SP) is: "<<SP<<"kW"<<endl;
    NS = round(Power_Load/SP);
    cout<<"Number of strings(NS) is: "<<NS <<endl;
    cout<<"The Array power(AP) is: "<<NS*SP<<" kW"<<endl;
    
    
    

    return 0;
}